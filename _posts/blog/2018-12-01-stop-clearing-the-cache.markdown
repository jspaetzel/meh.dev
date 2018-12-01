---
layout: post
title:  "Stop clearing the cache"
date:   2018-12-01 00:00:00 -0800
categories:
- programming
---

In the last hour I ran into 3 broken websites which were all broken by running outdated javascript files which were cached in my browser. 

Here are some possibilities
* You can set [cache headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control). This is better then nothing. If you do releases at night and most of your users are on the site during the day then this might fully fix the issue for you. It's not 100% though since if you were to change something in the middle of the day any users who were already on the site that day would not get your changes.
* You can version your releases. When you publish your code put all of the assets for the new version into a new file location like https://example.com/v9001/style.css
* You can include a hash with your files, like `style.912ec803b2ce49e4a541068d495ab570.css` where the hash is based on the file you are serving. This requires some build process changes but is my favorite way to go about it since the hash is a convenient way to verify things. For example: [Webpack is good at this](https://webpack.js.org/guides/caching/) 

So save your users the headache and stop telling them to clear their browser cache.

Remember what cachey the bear says: "Only you can prevent broken caches"