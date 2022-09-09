---
layout: post
title:  "Dependencies for stability"
date:   2016-07-24 00:00:00 -0500
last_modified_at:   2016-07-24 00:00:00 -0500
---

# How to choose dependencies for stability
Modern applications are built up of dozens or even hundreds of building blocks created by other programmers. Welcome to dependency hell! Now how do you get through?
<!--more-->

## Getting Started
First things first. Don't get caught up on how many options there are or every single feature, you'll lose valuable time that should be spent on new development. The only perfect choice will probably be the one you build yourself. But unfortunately if we always build everything ourselves we'll never finish anything. So how do we choose?

## Choose the right attributes
These do not apply to every application but these are the things I value most building something sustainable. Depending on how vital the component is you should spend more or less time researching each of these.

- [Ease of Development](#ease)
- [Lowering Maintenance Costs](#maintenance)
- [Software Licensing](#license)
- [Track Record](#track)

## <a name="ease">Ease of Development</a>
Read the docs, follow a tutorial for a sample application, the better a project is the easier this will be.

You will encounter problems, it's just part of programming. A good community will go a long way towards helping with this.

- Is the projects responsive to bug reports? What's the process?
- Do users participate in live chat?
- Are questions regularly answered and asked on Stack Overflow?

## <a name="maintenance">Lowering Maintenance Costs</a>
Don't let your schedule be held back by your imports. For anything mission critical review anything that might cause unexpected maintenance.

- Review the upgrade path between versions, the more documentation the better!
- How is the backward compatibility between versions.
- How frequent is the release cycle?

## <a name="license">Software Licensing</a>
In general anything FOSS will be alright to use but you should probably become familiar with the common ones so that you can quickly identify them. [Github published a handy website for learning more about the most common types](http://choosealicense.com/).

## <a name="track">Track Record</a>
Learning how to analyze a project's track record can help you to predict where it's going.

### Mature Projects (4+ years)
Projects that are sponsored by an open source organization such as the Apache Foundation are usually very reliable, they've been accepted by a reputable organization and are likely being actively maintained by the community. You can likely expect a strong degree of stability, community support, and very often one or more companies providing support & consulting services. Corporate sponsored projects are more hit and miss and should be reviewed individually based on the companies individual history.

### Young Projects (1-3 years)
Maturity comes with age, young projects even if they appear to be stable should be handled with care. I wouldn't recommend them for anything that cant be easily replaced.

Sometimes things get shutdown entirely like with [FoundationDB](https://techcrunch.com/2015/03/24/apple-acquires-durable-database-company-foundationdb/) and sometimes not? See what happened to [Parse](http://blog.parse.com/announcements/moving-on/)

### Personal Projects (any age)
Only use one of these if your comfortable contributing back or forking the entire thing. For small components this is probably fine but for essential pieces of your application you might want to choose something with a better record.
