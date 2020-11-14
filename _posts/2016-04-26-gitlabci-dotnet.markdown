---
layout: post
title:  "Building Dotnet with Gitlab CI"
date:   2016-04-26 00:00:00 -0500
edited:   2016-04-26 00:00:00 -0500
tags:
- Dotnet
- CI
---

The vast majority of GitLab's CI examples usually are centered around ruby development though it is an incredibly powerful tool for any language or framework.

I'll briefly demonstrate in this tutorial how to use GitLab.com to build, test, and publish any .NET application or nuget package quickly and easily.
<!--more-->
Requirements:

1. Any dependencies necessary to run your application locally.
2. GitLab.com account.

## Working with the command line
A quick introduction to building asp.net projects with the command line using msbuild, nuget, nunit, and mstest. Anything you can do in the command line you will be able to do as a task with gitlab-ci.

#### Building from the CLI

```shell
cd your_project_dir
nuget restore
msbuild yoursolution.sln
```

#### Testing your build
I regularly use NUnit & VS Test Tools, but any runner will work.

MSTest aka Visual Studio Test Tools
```mstest /testcontainer:testproject/bin/Debug/testproject.dll```

NUnit: ```nunit-console testproject.csproj```

Nunit also lets you reference the DLL directly, whereas mstest does not
```nunit-console testproject/bin/Debug/testproject.dll```

#### Creating & publishing a nuget package
```shell
nuget pack "my-project.csproj" -IncludeReferencedProjects -Build -Properties Configuration=Release -Version 1.0.0
nuget push \*.nupkg %NugetAPIKey%
```
Want to publish to a private nuget server? Tack on: -Source %NugetSource%'

#### Publishing a website
Using a publishing profile this is really easy
```shell
msbuild my-project.csproj /p:Configuration=Release /t:ReBuild /p:PublishProfile="my-profile-name" /p:DeployOnBuild=True /p:password="MyDeploymentPassword"  /p:VisualStudioVersion=12.0
```

## Setup a gitlab runner
Find the docs for this on the gitlab website, they're good!
https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/install/windows.md

## Creating your CI config file
Once you have a runner working on a machine you can add a config file to a project. This should be named `.gitlab-ci.yml` in order to be recognized by gitlab.

Here's a full example of one that works fine for a simple project that you want to continuously build, test, and deploy.

```yml
stages:
  - build

before_script:
  - 'nuget restore my-solution.sln'

build:
 stage: build
 script:
  - 'msbuild my-solution.sln /t:Clean,ReBuild /p:Configuration=Debug;Platform="Any CPU"'
  - 'nunit-console my-test-project/my-test-project.csproj'
  - 'msbuild my-solution.sln /t:ReBuild /p:Configuration=Release;Platform="Any CPU"'
  - 'nuget pack "my-project/my-project.csproj" -IncludeReferencedProjects -Build -Properties Configuration=Release -Version 0.0.1.%CI_BUILD_ID%'
  - 'nuget push \*.nupkg %NugetAPIKey% -Source %NugetSource%'
 only:
   - master
```
Most of these are the familiar commands that we went over above, but there's a couple things to point out.
- %CI_BUILD_ID% : Automatic variable for the unique build number
- %NugetAPIKey% : Custom project variable
- %NugetSource% : Custom project variable
