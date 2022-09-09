---
layout: post
title:  "Cloud Normalization"
date:   2016-08-07 00:00:00 -0500
last_modified_at:   2016-08-07 00:00:00 -0500
tags:
- Azure
- AWS
- Google
---

I've recently started using Amazon Web Services, had already been using Microsoft Azure, and have dabbled with Google's cloud services. Between them there's a *lot* of new terminology many of which has not yet been standardized. This is going to be an ongoing post basically to normalize the naming between all three.
<!--more-->

| Generic Name            | Azure                   | Amazon          | Google                |
|:----------------------- |:------------------------|:----------------|:----------------------|
| Server                  | Virtual Machine         | EC2             | Compute Engine        |
| Container Hosting       | Azure Container Service | EC2 Containers  | Container Engine      |
| Short Lived Containers  | Azure Functions         | Lambdas         | Cloud Functions       |
| File Storage            | Blob/File Storage       | S3              | Cloud Storage         |
| Archival Storage        | Cold Storage            | Glacier         | Nearline Storage      |
| Content Delivery        | Azure CDN               | Cloud Front     | Cloud CDN             |
| NoSQL App Storage       | DocumentDB              | DynamoDB        | Cloud Datastore       |
| Managed SQL Server      | SQL Database            | RDS             | Cloud SQL             |
| In Memory Data Cache    | Redis Cache             | ElastiCache     | Redis Cloud (Partner) |
| Data Analytics          | Data Warehouse          | Redshift        | BigTable              |
| Massive Data Analytics  | Data Lake               | EMR             | BigQuery              |
| DNS                     | Azure DNS               | Route 53        | Cloud DNS             |

Note: This is an overview based on my experiences and therefore is a rough approximation based on how you would use the service, not how it functions technically.
