---
layout: post
title:  "Documentation driven development"
date:   2020-04-07 00:00:00 -0800
edited:   2020-04-07 00:00:00 -0800
tags:
- Programming
---

The thing that makes good libraries stand-out is excellent documentation.

Well named verbose functions and class names can sometimes be effective in automatically generating detailed documentation which can take you far. But that's only one critical aspect of documentation.

## Types of Documentation
* Reference
* Examples
* Guides
* Communication

These are all important but most of the time engineers focus on just one of these points.Reference documentation which is the easiest to create and maintain by being generated from code.

The nice thing about Reference documentation is that it's comprehensive and always up to date. The place that it falls short is when demonstrating how the code connects to the business. It also falls short in detailing processes related to the code in order to maintain and run an application.

Examples help fill one gap by demonstrating how the code relates to the business. Examples can add domain keywords which can be found when searching. Those keywords are important since outside engineering different terminology is often used. New developers who don't have as much context can use examples to see how abstract concepts are related.

Guides serve a different purpose and can be used to fill gaps in automation. In an ideal world your installation guide might just be:  Run `./install.sh` to install the application.

However in reality you may have some additional pre-requisites that are not part of the installer. For example a simple installation guide might include instructions for how to generate a specific API key and add that to your system environment before running `install.sh`.

Communication with stakeholders is just as important as having documentation readily available and when communicating with stakeholders it's important to be actively transparent. You could broadcast updates to everyone but that's a recipe for missing important details since more folks are likely to miss messages via email.

When speaking with stakeholders you most likely don't need to go into great detail. Stakeholders often want a high level overview. The most important thing for them is not what's included but rather what things have been intentionally excluded.

By being actively transparent you can ensure targeted individuals are made aware. 

So fulfill that obligation and write more examples and guides. Send guides to individuals you think they'll be relevant to, the more often you get it wrong sending things to the wrong individuals the more in-tune you'll become with who you should send contents to in the future. 

You're extra effort will pay dividends when other developers don't need to ask you as many questions and you'll be able to more easily ramp up new folks who join your team.