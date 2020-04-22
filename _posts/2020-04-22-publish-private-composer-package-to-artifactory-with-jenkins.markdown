---
layout: post
title:  "Publishing private composer packages to Artifactory with Jenkins"
date:   2020-04-22 00:00:00 -0800
tags:
- CI
- PHP
- Composer
- Artifactory
- Jenkins
---

This is a quick guide for how to publish a custom Composer package to Artifactory with Jenkins in a way that behaves similarly to Packagist. The version will come from a git tag without needing to update the composer.json file.

## Configuration

* Setup the [Jenkins Artifactory Plug-in]('https://www.jfrog.com/confluence/display/JFROG/Jenkins+Artifactory+Plug-in'), this will make things easier since you wont need to manage credentials or make http requests directly from the pipeline. 

* Enable tags as a "Branch Source" in Jenkins. For Github this is under the folder or project settings. "Discover tags" should be an enabled behavior. If this isn't set you may not see tags be built in Jenkins.

* Create a local Composer repository in Artifactory. [See the JFrog documentation for how to create]('https://www.jfrog.com/confluence/display/JFROG/PHP+Composer+Repositories').

## composer.json

* Do not specify a `"version"`, it will be populated by Jenkins via a git tag.
* Include `"archive"` options since you probably do not want to push up the vendor folder or other things that shouldn't be part of a package. For instance I exclude tests since consumers of my package wont be running tests, I only need them during CI and development.
{% highlight json %}
{% raw %}
"archive": {
     "exclude": ["/vendor", "/build", "**/Tests/*"]
}
{% endraw %}
{% endhighlight %}


## Archive creation in Jenkinsfile
When creating an archive, we can use the `$TAG_NAME` which is supplied by Jenkins. You should change `example` to the name of your package.
{% highlight groovy %}
{% raw %}
stage("Create Archive") {
    when {
        branch 'master'
        tag '*'
    }
    steps {
        sh "php composer.phar archive --format=zip --dir=build --file=example-$TAG_NAME"
        archiveArtifacts artifacts: 'build/*.zip'
    }
}
{% endraw %}
{% endhighlight %}
Note: `archiveArtifacts` only archives the artifact to Jenkins, this is optional and can be left out if you only want to push the archive to Artifactory.

## Publishing to Artifactory from your Jenkinsfile
When publishing it's possible to set the version using a property. Since we are using the plugin and we're providing a [file spec]('https://www.jfrog.com/confluence/display/JFROG/Using+File+Specs')  we'll pass it in as a prop. `"props": "composer.version=$TAG_NAME"`. If we weren't using the plugin it would be specified as a url query variable like this: `?properties=composer.version=$TAG_NAME`.

In the target, `composer-local` is the name of my local Composer repository in Artifactory. Change that to what yours is named and change `example` to the name of your package or other path where you want the package published. Do not forget the trailing `/` in the target otherwise it will become the filename.


Publishing stage
{% highlight groovy %}
{% raw %}
stage("Publish") {
    when {
        branch 'master'
        tag '*'
    }
    steps {
        script {
            def server = Artifactory.server 'artifactory'
            def buildInfo = server.upload spec: """{
                "files": [
                    {
                        "pattern": "${env.WORKSPACE}/build/*.zip",
                        "target": "composer-local/example/",
                        "props": "composer.version=$TAG_NAME"
                    }
                ]
            }"""
            server.publishBuildInfo buildInfo
        }
    }
}
{% endraw %}
{% endhighlight %}