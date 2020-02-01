---
layout: post
title:  "AutoKey, GO!"
date:   2019-08-25 00:00:00 -0800
tags:
- Productivity
---

AutoKey is a text expansion/replacement utility for Linux. In addition to text expansion capabilities it's also able to be triggered by hotkeys and create custom prompts for inputs. 

This script is a simple one I bind to Alt+Space which winds up functioning _kinda_ like Spotlight from OSX but more programmable.

Features:
* Quick browser access to bookmarks
* Opening of Jira tickets
* Search for things faster

{% highlight python %}
import re
import urllib
import webbrowser

retCode, command = dialog.input_dialog(title='Go',
                                       message='Where to?',
                                       default='')

bookmarks = {
    "gh": "https://github.com/jspaetzel",
    "js": "https://johnspaetzel.com",
    "groupmephp": "https://github.com/jspaetzel/GroupMePHP",
}

if re.search('\\w{2,3}-\\d{1,4}', command):
    webbrowser.open("https://jira.atlassian.net/browse/" + command)
elif command in bookmarks:
    webbrowser.open(bookmarks.get(command))
elif re.search('^google/.+$', command):
    query = re.match('^google/(.+)$', command).group(1)
    webbrowser.open('https://google.com/?q=' + urllib.parse.quote(command))
elif len(command) > 0:
    webbrowser.open('https://duckduckgo.com/?q=' + urllib.parse.quote(command))
{% endhighlight %}

[Checkout my other post about text expanders & clipboard management](text-expansion-clipboard-management).