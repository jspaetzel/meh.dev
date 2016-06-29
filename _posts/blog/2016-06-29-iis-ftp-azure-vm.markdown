---
layout: post
title:  "IIS FTP on Azure VM"
date:   2016-06-29 00:00:00 -0500
categories:
- blog
tags:
- ftp
- ops
---


# Azure
Create a new VM

Open ports on azure aka create endpoints. Depending on the type of VM you'll probably do this from portal.azure.com, manage.windowsazure.com, or via the azure command line.
FTP Port: 21
FTP Passive Data Ports: 20000-20005, I used this range but you could use more or less.

# Install FTP Service
![Turn on or off]({{ site.url }}/assets/iis-ftp-azure/turnwindowsfeaturesonoff.jpg)
![Add FTP]({{ site.url }}/assets/iis-ftp-azure/addfeatures.jpg)

# Configuring IIS

### Configure firewall via IIS
![Firewall Settings]({{ site.url }}/assets/iis-ftp-azure/firewall.png)

### FTP User Isolation
This is the setting I decided to go with, there's a good explanation of how each of these work in the microsoft documentation.
![Firewall Settings]({{ site.url }}/assets/iis-ftp-azure/isolation.png)

# Setting up the FTP Site, users, and directories
- Add new FTP site: This is per hostname that you want to use. In most cases you will only need one of these with different users.
- 

# Restart Microsoft FTP Service
Note: Restarting the service for IIS does not take on the settings you applied earlier.