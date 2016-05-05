---
layout: post
title:  "Building Dotnet with Gitlab CI"
date:   2016-04-26 00:00:00 -0500
categories: 
- blog
tags:
- dotnet
- ci
- ops
---

The vast majority of GitLab's CI examples usually are centered around ruby development though it is an incredibly powerful tool for any language or framework. 

I'll demonstrate in this tutorial how to use GitLab.com to build, test, and publish any .NET application or nuget package quickly and easily. 

Requirements:

1. Any dependencies necessary to run your application locally.
2. GitLab.com account.


Sections:

1. Learn how to build, test, package, and publish from the command line.
2. Install the gitlab runner
3. Create the gitlab-ci.yml config file

Section 1: CLI

We'll be learning how to do common tasks that visual studio usually handles for you, but with the command line. GitLab-CI uses standard shell commands when performing all actions. If you can do it in the command line, you can do it in gitlab's ci.

Section 1.1: Building from the CLI

If you mostly develop your .net application in visual studio then you might never use the command line to build. Fortunately it's almost as easy.

{% highlight shell %}
cd your_project_dir
nuget restore
msbuild yoursolution.sln
{% endhighlight %}

Section 1.2: Testing your build

- VS Test Tools
- NUnit

Section 1.3:

- Packaging & Publishing for nuget
- MSbuild publishing profiles

Section 2: Installing the gitlab runner

Section 3: Creating your CI config file
