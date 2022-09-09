---
layout: post
title:  "Writing code for other developers"
date:   2020-02-22 00:00:00 -0800
last_modified_at:   2020-02-22 00:00:00 -0800
tags:
- Programming
---

The users of code are other developers who will inevitably read and modify that code. Your product is code and you should do some product analysis when writing new code. It should be optimized to be usable by the subset of developers who will later read that code.

# Who are your users?

Who is going to work on your code next is important to consider, it should influence and shape what's written. Consider what knowledge other developers working with your code have already and target the lowest of your expectations. 

> E.g. In a large Java codebase with no functional paradigms. You probably shouldn't casually start using higher-order functions.

So who's going to use it? 
* Programming nerds?
* Academics? 
* Recent college graduates?
* Bootcamp students?
* Web developers?
* Your mother?

Most of the time you're writing code for the "average developer" and the lowest common denominator of an average developer is a recent college graduate. Think about yourself from years ago. Which concepts did you understand when you graduated and for the first couple years afterwards. Write code for that version of yourself. If that version can figure out how the code works then anyone can.

# Consider the type of code

Not all code is created equally. You have a lot more or less latitude depending on where the code is in an application.

## Isolated functions
If you are writing a single function that is well defined, independent of domain logic, narrowly scoped, and unit tested then this is as good as it gets. In this scenario you have the most possible freedom to be creative with your implementation. The cyclomatic complexity will be low so whoever looks at it should be able to figure out what's going on relatively quickly. 

Enjoy the opportunity to write for yourself.

## Business logic
Code which contains domain knowledge is a key part of an application and for most applications is the part that brings value to a product. Writing this should take into consideration language used by the business, by product managers, and by non-technical users. This code is going to be modified, frequently. Very frequently. Strive for flexibility and simplicity. If you cant grok exactly what it's doing in a few seconds then consider adding documentation. The faster you and others understand how business logic works the faster you can iterate on features that drive value.

## Developer APIs and shared libraries
The best libraries are the ones that do what you want them to do and then get out of the way. Look at a few libraries that you LOVE and think about why you like them vs other libraries that do the same thing but for some reason just aren't as good. Also check a few of the most popular libraries and consider what attributes may account for their stickiness. 

Depending on the type of developers using your library how you write it may vary quite a lot. 

In the case of libraries you need to optimize separately for two groups of people. The developers using the library via it's public interfaces. And other developers who may want to contribute to the library. Contributors will have substantially more experience then end user developers and you can assume they'll be willing to spend more time learning in order to contribute back to the library.

# TLDR

Write code for the least experienced developer on your team because they need to be able to work on it too.