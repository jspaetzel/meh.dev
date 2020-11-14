---
layout: post
title:  "Maintainable Servers - 4 years of service and counting"
date:   2017-03-06 00:00:00 -0500
edited:   2017-03-06 00:00:00 -0500
---

Today one of my personal servers reached a new milestone, it's 4th year of service! To commemorate the occasion I've written about how I run my servers in a way that is maintainable. <!--more--> I'm also excited because I just updated from PHP 5.6 to PHP 7.0 and from Ubuntu 14.04 to 16.04 with no serious problems. This was the most maintenance I have had to do in the last 4 years and it only took several hours.

## What runs on them?
- Websites that I personally maintain and develop
- Friends websites which are mostly WordPress and a few static sites
- A Mono web api
- Half a dozen cronjobs
- Mailboxes for my domains

When a website or service starts to outgrow the resources of this shared box I re-evaluate it's needs. At that point it might move to the cloud.

## Why do you run servers yourself?
1. It keeps me up to date on server technologies. I think its important for any developer who works on backend software to understand the rest of the server. For example, understanding how workers work in a web server can directly affect high level applications are designed.
2. I can generally get better performance from my applications over hosting it on a PAAS.
3. It saves time on new development, the setup step is complete before starting.
4. Sometimes it's useful to have a shell that's always online and unrestricted for commands. Ever need an SSH proxy in another country?
5. It's cheap! $$$

## How much does it cost, what are the specs?
I pay *$54/year* for one server.

The specs I have on my primary server are:
- 2 CPU cores
- 1 GB of memory
- 3 TB of data transfer, up to 10 Gbit/s
- 30 GB of SSD storage
- 1 Dedicated IPv4 address

Here's a comparison based on the closest available options based on the specs of my primary server listed above.

| Current | AWS LightSail | DigitalOcean | Azure   |
|----------|---------------|--------------|---------|
| $54/yr   | $120/yr       | $240/yr      | $205/yr |

I tried to compare a few others but most cloud providers optimize for higher memory and scale then I need. It may be easier to compare larger instances. GCM is between $49.06/yr and $1,292.10/yr depending on which resources are shared. I encountered a similar issue when trying to compare AWS EC2 instances directly.

Note: My estimates only consider CPU, Memory, Transfer, and same instance SSD storage. These estimates do not take into account fees, licensing costs, or storage when charged separately from cpu & memory. I'm disregarding special features & services that may raise the value of services that are specific to each provider.

## How's the uptime?
I've had one [notable outage](https://partyvan.eu/transparency/emails/2015-02-17-prometeus-outage.txt) in the last 4 years. A friend added one of my domains to his monitoring service back in 2010. [You can see uptime for every day since 2010 here](http://chemicalservers.grd.net.pl/monitor/archive/?2016-10-01).

## What is your stack?
I use a control panel on my systems to allow myself and other developers to interact with the server more easily. For this I use [Vestacp](https://vestacp.com/) it makes managing the server easier on myself without getting in the way.

My current stack with this is
- Nginx in front of Apache with mod_php7, mod_mono for websites
- NodeJS: Server side applications
- MySQL: Database
- Bind9: DNS Server
- Exim: SMTP Server
- Dovecot: IMAP/POP3 Server
- vsftpd: FTP Server
- iptables: Firewall
- Cron: Scheduling
- New Relic: Monitoring
- Blackfire: PHP performance testing

I frequently swap parts in and out. Sometime in the next few months ill probably add a Go server behind Nginx.

# How long have you been doing this?
I have two servers currently:
Server A: I've had this one for 4 years tomorrow. During that time it's had only one notable outage for several hours.
Server B: I didn't need this one when I got it, but my provider had a killer Black Friday. Turned out to be useful so I kept it since November 2015.

Since 2009 I have had several other servers with other providers. I'm pretty happy with my current one though and haven't needed to switch since 2013.

## Who's your provider?
I presently use [prometeus](https://www.prometeus.net/) which has been a good experience. They have the right mix of support for me. I only contact them when there's something I cant do from the control panel they provide, which means I've only ever contacted them with billing questions.

## Thanks for reading
If you have any questions feel free to reach out to me. While writing this I realized there are several more topics that I could go into greater depth on and which will likely be future posts.
- Advantages & disadvantages of hosting a website in a shared server environment
- An overview of VestaCP for managing a server and websites
- Configuring Nginx with a Go web server
