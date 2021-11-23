---
layout: post
title:  "Practical Interviewing"
date: 2021-11-22T17:59:45.210614-08:00
edited: 2021-11-22T17:59:45.210614-08:00
---

There's two main styles of interviewing.

1. Algorithm problems which test the candidate's problem solving skills
2. Practical problems that you might encounter on the job

Both have their merits however I hope to convince you that you should use practical problems when interviewing candidates, if you can.

# Algorithm Questions
The goal of this type of problem is determine whether the candidate can solve programming challenges in general. The assumption is that if the candidate can solve _some_ problem(s) then they'll be able to solve many other types of problems as well. Often these types of problems expect you to be familiar with some specific common algorithms which will make the problems easier to solve.

A simple version of an algorithm problem is [the classic "Fizz Buzz" problem](https://www.geeksforgeeks.org/fizz-buzz-implementation/).

> Write a program that prints the numbers from 1 to 100 and for multiples of ‘3’ print “Fizz” instead of the number and for the multiples of ‘5’ print “Buzz”. 

A program to solve this can be written in less then 15 minutes by most developers and will look pretty similar in most programming languages.

**The Good**

Most questions of these type are very clearly defined and expect a specific input and output. They're nice to ask because they typically have a limited number of possible solutions and interviewers can apply a "pass" or "fail" evaluation easily. As an interviewer you also get a predictable number of follow-up questions from candidates since there is a limited number of approaches. All this means that they are easy to scale and reuse among many interviewers and candidates. 

**The Bad**

Great right? The disadvantages of algorithm questions are somewhat nuanced. 

These types of problems are essentially pattern recognition questions, if you remember a similar problem, or recognize which algorithm should be used for a problem then you'll be able to solve it more quickly. If you don't, you may have to combine other strategies you've seen which may take longer.

Examples of these types of questions are easy to find online and there are many resources for practicing. In-general if you practice them before-hand you'll do better on these types of questions. 

There are a **lot** of resources for practicing these questions.
* [Cracking the Coding Interview](https://www.crackingthecodinginterview.com/)
* [Code Signal](https://codesignal.com/developers/interview-practice/)
* [Project Euler](https://projecteuler.net/)

Many companies reuse and refine these type of interviews for years. If the same one is reused long enough, often you can even find it published by prior candidates online on github or other websites.

# Practical Questions

These problems are typically more abstract but might use specific techniques or technologies. They can encompass more of the business domain and require the candidate to think holistically about the needs of users. As the interview goes on the interviewer often modifies the question to add more requirements to increase the difficulty. A "complete" answer isn't necessarily the goal and the interviewer looks at how the problem is being solved in addition to verifying that the solution should work. Often this type of interview goes on until time runs out.

A simple problem you might start off with for a practical question might be to design an API. For instance

> Design an API with two functions `insert` and `count`. The insert function should insert letters and the count should return how many of each letter has been inserted.

The open-ended nature of this question allows us to see how the candidate thinks about the problem. We can modify the requirements by asking them to test for specific scenarios, add functional requirements, or simply ask them to improve the performance.

**The Good**

Sometimes these problems include actual programming but more often they are theoretical and the code written might never be run, or can be simple pseudo-code, but the solution should still appear logically correct to the interviewer. This can prevent candidates from getting hung up on syntax errors, unfamiliarity with a language, ide, specific computer, or other minor details which aren't as important when interviewing. These can be a more collaborative process between the interviewer and the interviewee which is a useful test of how the candidate will work with others.


**The Bad**

These questions are harder to execute for an interviewer. The interviewer needs to remain engaged to ask the candidate to make modifications if they begin exploring something that's tangential to the problem, or they may need to add additional requirements if the candidate solves the problem too quickly. Often candidates will have more questions for the interviewer, like "is this important" or "should I do xyz"? These types of questions are immensely useful for understanding the approach being taken.