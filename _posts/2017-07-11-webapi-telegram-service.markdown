---
layout: post
title:  "WebApi2 Telegram Service"
date: 2017-07-11
last_modified_at: 2017-07-11
tags:
- C Sharp
- Mono
- Telegram
- Project
links:
- Github: https://github.com/jspaetzel/TelegramService
---

This service worked in conjunction with enl.io to provide a interface to interact with the telegram TL-schema API via HTTP in a stateless manner.

It was primarily used indirectly via a website to perform actions like banning users and adding users in many large telegram chats. We deprecated this in favor of the Telegram Bot API which has expanded it's feature set substantially and can be interacted with via HTTP and by MadelineProto which is a more direct implementation for these same requests.
