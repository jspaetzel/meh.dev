---
layout: post
title:  "How to use a fork of a Composer Package"
date: 2022-07-08T17:38:31.457571-07:00
last_modified_at: 2022-07-08T17:38:31.457571-07:00
---

## 1. Fork the Git Repository on Github

## 2. Make changes in a branch

For this example I'll use the branch will be named `mybranch`

## 3. Add repositories entry in composer.json

```bash
"repositories": [
    {
        "type": "vcs",
        "url": "https://github.com/yourgithubuser/packagename",
        "no-api": true
    }
],
```

> ⚠️ If you get an error like "GitHub API limit (0 calls/hr) is exhausted, could not fetch"? make sure you have the `"no-api": true` configuration specified.

## 4. Require custom version in Composer

Require the package with 
```bash
composer require vendor/packagename:dev-mybranch
```

> ℹ To avoid conflicts with other packages, you can alias your branch as a specific version
> `composer require "vendor/packagename:dev-mybranch as 1.0.0"`
