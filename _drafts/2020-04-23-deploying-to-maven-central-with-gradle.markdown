---
layout: post
title:  "Deploying to Maven Central with Gradle"
date:   2020-04-23 00:00:00 -0800
tags:
- CI
- Gradle
- Java
---

When building new projects I generally want to install the bare mininum and then build. The defaults on [Sonatype's website for deploying to OSSRH with Gradle](https://central.sonatype.org/pages/gradle.html) modify the build configuration and causes the build to fail if you dont have credentials set. Building without credentials can be useful for projects which have other contributors who may not be involved in the signing or publishing of artifacts. This post shows what should be changed in order to do both.


## Apply plugins

{% highlight groovy %}
{% raw %}
apply plugin: 'maven'
apply plugin: 'signing'
{% endraw %}
{% endhighlight %}

## Create Jar Files

{% highlight groovy %}
{% raw %}
task javadocJar(type: Jar) {
    classifier = 'javadoc'
    from javadoc
}

task sourcesJar(type: Jar) {
    classifier = 'sources'
    from sourceSets.main.allSource
}

artifacts {
    archives javadocJar, sourcesJar
}
{% endraw %}
{% endhighlight %}

I also typically provide a fatJar  task for convenience so that it's easy to generate a jar locally if needed. 

{% highlight groovy %}
{% raw %}
task fatJar(type: Jar) {
    from { configurations.compile.collect { it.isDirectory() ? it : zipTree(it) } }
    with jar
}
{% endraw %}
{% endhighlight %}

## Metadata Definition and Upload

{% highlight groovy %}
{% raw %}
group = "com.example.applications"
archivesBaseName = "example-application"
version = "1.4.7"
{% endraw %}
{% endhighlight %}


## Uploading & Signing

The upload task I modified to allow builds without any signing credentials. 

{% highlight text %}
{% raw %}
Could not get unknown property 'ossrhUsername' for object of type org.gradle.api.publication.maven.internal.deployer.DefaultGroovyMavenDeployer.
{% endraw %}
{% endhighlight %}

This error is because the username wasn't defined. I fixed this with the `findProperty` function, thanks to [this stackoverflow post](https://stackoverflow.com/a/43728465/1318813) for pointing that out.

{% highlight text %}
{% raw %}
Cannot perform signing task ':signArchives' because it has no configured signatory
{% endraw %}
{% endhighlight %}

signArchives then failed because credentials weren't being passed. We can just skip that by checking for the task `hasTask("uploadArchives")`.

{% highlight groovy %}
{% raw %}
signing {
    required { gradle.taskGraph.hasTask("uploadArchives") }
    sign configurations.archives
}

uploadArchives {
  repositories {
    mavenDeployer {
      beforeDeployment { MavenDeployment deployment -> signing.signPom(deployment) }

      repository(url: "https://oss.sonatype.org/service/local/staging/deploy/maven2/") {
        authentication(userName: findProperty('ossrhUsername'), password: findProperty('ossrhPassword'))
      }

      snapshotRepository(url: "https://oss.sonatype.org/content/repositories/snapshots/") {
        authentication(userName: findProperty('ossrhUsername'), password: findProperty('ossrhPassword'))
      }

      pom.project {
        name 'Example Application'
        packaging 'jar'
        // optionally artifactId can be defined here  
        description 'A application used as an example on how to set up pushing  its components to the Central Repository.'
        url 'http://www.example.com/example-application'

        scm {
          connection 'scm:svn:http://foo.googlecode.com/svn/trunk/'
          developerConnection 'scm:svn:https://foo.googlecode.com/svn/trunk/'
          url 'http://foo.googlecode.com/svn/trunk/'
        }

        licenses {
          license {
            name 'The Apache License, Version 2.0'
            url 'http://www.apache.org/licenses/LICENSE-2.0.txt'
          }
        }

        developers {
          developer {
            id 'manfred'
            name 'Manfred Moser'
            email 'manfred@sonatype.com'
          }
        }
      }
    }
  }
}
{% endraw %}
{% endhighlight %}

## Configuration

When you are ready to upload you'll need credentials for signing in a `gradle.properties` file.

{% highlight yaml %}
{% raw %}
signing.keyId=YourKeyId
signing.password=YourPublicKeyPassword
signing.secretKeyRingFile=PathToYourKeyRingFile

ossrhUsername=your-jira-id
ossrhPassword=your-jira-password
{% endraw %}
{% endhighlight %}