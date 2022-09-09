---
layout: post
title:  "Drop-in Github Action Jekyll Builds"
date:   2019-12-04 00:00:00 -0800
last_modified_at: 2021-03-11T02:12:44.495718-08:00
tags:
- CI
- Jekyll
- Github Actions
---

Github Actions are a powerful way to automate your CI/CD pipeline. I've experimented with using it to build this website and came up with an easy to use script that's a drop in way of building and deploying jekyll to github pages.

This script has a couple assumptions: 
* Jekyll builds the site into the `_site` directory
* You commit un-built code to `master`
* You want to publish to the `gh-pages` branch

Because Github Actions already have pre-defined environment variables related to the current repository you only need to configure a personal access token to get this working.

##  Configuring a personal access token
Configure a personal access token at [https://github.com/settings/tokens](https://github.com/settings/tokens)
and give it "Full control of private repositories"

Add the new personal access token your repository as a secret named **GITHUB_PAT**

## Github yaml actions script
This file should be added like: `.github/workflows/build_and_deploy.yml`

```yaml
name: CI

on:
  push:
    branches: 
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: '2.7'
          bundler-cache: true
      - run: bundle exec jekyll build
      - run: |
          git clone "https://${GITHUB_PAT}@github.com/${GITHUB_REPOSITORY}.git"
          cd $(basename "${GITHUB_REPOSITORY}")
          git config user.name "Gitub Actions"
          git config user.email ""
          rsync -avz --delete --exclude '.git*' ../_site/ .
          touch .nojekyll
          git add -A .
          git commit -m "Generated Jekyll site by Github Action - ${GITHUB_ACTION}"
          git push --force "https://${GITHUB_PAT}@github.com/${GITHUB_REPOSITORY}.git" HEAD:gh-pages
        env: 
          GITHUB_PAT: ${{ secrets.GITHUB_PAT }}
```


With this yaml added to the repo your site should get built and deployed automatically to github pages.

This script was initially pretty slow for my site which requires several native extensions to build. With the new `ruby/setup-ruby@v1` github action the speed has increased substantially since the ruby extensions are now cached between builds!