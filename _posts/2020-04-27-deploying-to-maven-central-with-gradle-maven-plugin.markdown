---
layout: post
title:  "Deploying to maven central with gradle maven plugin"
date:   2020-04-27 00:00:00 -0800
edited: 2020-04-28 00:00:00 -0800
tags:
- CI
- Gradle
- Java
- Maven
---

When building new projects I generally want to install the bare mininum and then build. The defaults on [Sonatype's website for deploying to OSSRH with Gradle](https://central.sonatype.org/pages/gradle.html) modify the build configuration and causes the build to fail if you dont have credentials set. Building without credentials can be useful for projects which have other contributors who may not be involved in the signing or publishing of artifacts. This post shows what should be changed included in your `gradle.build` file in order to do both.


## Errors encountered

The upload task need to be modified to allow builds without any signing credentials to avoid these two errors by just doing less.

```Could not get unknown property 'ossrhUsername' for object of type org.gradle.api.publication.maven.internal.deployer.DefaultGroovyMavenDeployer.```

This error is because the 'ossrhUsername' variable is unset.

```Cannot perform signing task ':signArchives' because it has no configured signatory```

And this one is because the username/password is set but empty.

## Complete Example build.gradle

```groovy
// Apply Plugins
apply plugin: 'java'
apply plugin: 'maven'
apply plugin: 'signing'

// Metadata Definition
group = "com.example.applications"
archivesBaseName = "example-application"
version = "1.4.7"

tasks.withType(JavaCompile) {
	options.encoding = 'UTF-8'
}

// Create Jar Files
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

// Signing and upload
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
            id 'jspaetzel'
            name 'John Spaetzel'
            email 'john@example.com'
          }
        }
      }
    }
  }
}

// Project Dependencies
repositories {
    mavenCentral()
}

dependencies {}
```

## Configuration

When you are ready to upload you'll also need the credentials for signing in a `gradle.properties` file.

```yaml
signing.keyId=YourKeyId
signing.password=YourPublicKeyPassword
signing.secretKeyRingFile=PathToYourKeyRingFile

ossrhUsername=your-jira-id
ossrhPassword=your-jira-password
```