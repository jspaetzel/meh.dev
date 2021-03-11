---
layout: post
title:  "The top PHP static code analysis tools of 2021"
date:   2021-03-11T01:38:15.487804-08:00
edited: 2021-03-11T01:38:15.487804-08:00
tags:
- PHP
- CI
- Static Analysis
---

The PHP community has a diverse ecosystem of static analysis tools which can make it somewhat difficult to decide which tools to use. Hopefully this post helps you decide which of these tools you'll use.

This post separates these tools into one of two types depending on their purpose. The first section is static analysis for the purpose of identifying bugs. The later section is for maintenance of code style.

# Static Code Analysis Tools
* [PHPStan](https://github.com/phpstan/phpstan) is the most commonly used tool and also one of the youngest. It has been rapidly adopted since it's release in 2016. It'll discover bugs in your code without running the code.

* [Pslam](https://github.com/vimeo/psalm) was also released in 2016 and has grown in popularity a little more slowly. It claims more features out of the box and has a focus is on type-related bugs.

* [Scrutinizer](https://scrutinizer-ci.com/) is the most popular commercial option in use by open-source projects and has been around longer then it's open-source counterparts. It's free for open-source projects but is only available as a hosted solution.

* [Phan](https://github.com/phan/phan) isn't used by many of the projects I reviewed but is popular and well supported. It was created at Etsy and appears to be the primary tool used by Wikipedia's MediaWiki project. The advertised upside of using Phan is that it has a focus on minimizing false-positives. This makes it trivial to use but it might catch fewer issues compared to the other options.

Lets look at what some popular open-source PHP project use. This table only includes repositories which have at least 1K github stars, and which implement the static analysis tools as a component of their continuous integration systems.

|                | ⭐     | [PHPStan](https://github.com/phpstan/phpstan) | [Pslam](https://github.com/vimeo/psalm) | [Scrutinizer](https://scrutinizer-ci.com/) | [Phan](https://github.com/phan/phan) |
|----------------|-------|---------|-------|-------------|------|
| Composer       | 24.9K | ✔️      |       |             |      |
| Symfony        | 24.8K |         | ✔️    |             |      |
| Guzzle         | 20.6K | ✔️      | ✔️    |             |      |
| Monolog        | 18.5K | ✔️      |       |             |      |
| PHPUnit        | 17.2K |        | ✔️    |             |      |
| NextCloud      | 13.7K |        | ✔️    | ✔️          |      |
| Yii            | 13.7K |        |       | ✔️          |      |
| PHPDotEnv      | 11.1K | ✔️      | ✔️    |             |      |
| Slim           | 10.9K | ✔️      |       |             |      |
| Doctrine       | 8.4K  | ✔️      |       |             |      |
| Assert         | 6.7K  |        | ✔️    |             |      |
| Oauth2-Server  | 5.8K  | ✔️      |       | ✔️          |      |
| AWS SDK        | 5.1K  | ✔️      |       |             |      |
| Elasticsearch SDK | 4.5K  | ✔️      |       |             |      |
| php-amqplib    | 3.7K  |        |       | ✔️          |      |
| Stripe SDK     | 2.8K  | ✔️      |       |             |      |
| Mediawiki      | 2.4K* |        |       |             | ✔️   |
| Maxmind GeoIP2 | 1.8K  | ✔️      |       |             |      |
| Paratest       | 1.6K  | ✔️      | ✔️    |             |      |
| Sentry SDK     | 1.5K  | ✔️      | ✔️    |             |      |

There's a few other fairly popular tools worth mentioning but which were not used by the projects above during CI.
* [PHP Mess Detector](https://github.com/phpmd/phpmd): This is an older static analysis tool which offers some different functionality. Besides identifying potential bugs it also can help identifying generally poor code. It's very mature and may be more useful for targeted project analysis.

* [Sonarqube](https://www.sonarqube.org/): Sonarqube is another commercial static analysis product. It's community edition is good at detecting bugs, vulnerabilities, and generally for improving code quality. They also provides an [IDE extension, Sonarlint](https://www.sonarlint.org/) which works well to supplement the CI offerings.

* [PHPStorm Code Inspections](https://www.jetbrains.com/help/phpstorm/code-inspection.html): The inspection tools built into PHPStorm are impressive and can identify many potential issues without any additional tooling.

* [PHP Inspections (EA Extended)](https://github.com/kalessil/phpinspectionsea): This is a plugin for IntelliJ/PHPStorm which supplements the inspections built into PHPStorm.

# Style Tools

* [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) is the original code standards tool for PHP and dates back to 2006. It's primary use is to establish standards and identify violations. It does however also provide a package `phpcbf` which can sometimes automatically fix violations. PHPCS is extremely mature and very flexible and comes with a massive selection of pre-written "Sniffs" available to use.

* [PhpCsFixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) is supported by the popular Symfony framework. This tool automatically applies any defined code styles to code when it's run. e.g. `php-cs-fixer fix src`. This seems to be the leading choice for a majority of projects.

* [StyleCI](https://styleci.io/) is Laravel's answer to code style. This is a hosted commercial solution which is free for open-source projects. It takes a similar approach to PhpCsFixer and can automatically apply a selected style to code. It's different though in that it modifies code after it's been merged into a git repository. It fixes styles quietly in the background as developers make changes by pulling the code, restyling it, and pushing it back to the main repository.

Here's a selection of some of the most popular packages using these today.

|                | ⭐      | [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) | [PhpCsFixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) | [Style CI](https://styleci.io/) |
|----------------|--------|-------|------------|----------|
| Laravel        | 64.2K  |       |            | ✔️       |
| Composer       | 24.9K  |       | ✔️         |          |
| Symfony        | 24.8K  |       | ✔️         |          |
| Guzzle         | 20.6K  |       | ✔️         |          |
| Monolog        | 18.5K  |       | ✔️         |          |
| PHPUnit        | 17.2K  |       | ✔️         |          |
| Wordpress      | 14.8K* | ✔️    |            |          |
| NextCloud      | 13.7K  |       | ✔️         |          |
| Yii            | 13.7K  |       | ✔️         |          |
| Slim           | 10.9K  | ✔️    |            |          |
| Phalcon        | 10.4K  | ✔️    | ✔️         |          |
| Doctrine       | 8.4K   | ✔️    |            |          |
| php-jwt        | 7.2K   |       | ✔️         |          |
| Twig           | 7.1K   |       | ✔️         |          |
| Assert         | 6.7K   |       | ✔️         |          |
| Predis         | 6.7K   |       | ✔️         |          |
| Oauth2-Server  | 5.8K   |       |            | ✔️       |
| Elasticsearch  | 4.5K   | ✔️    | ✔️         |          |
| php-amqplib    | 3.7K   | ✔️    |            |          |
| Drupal         | 3.5K*  | ✔️    |            |          |
| Stripe SDK     | 2.8K   |       | ✔️         |          |
| Mediawiki      | 2.4K   | ✔️    |            |          |
| Maxmind GeoIP2 | 1.8K   | ✔️    | ✔️         |          |
| Paratest       | 1.6K   | ✔️    |            |          |
| Sentry SDK     | 1.5K   |       | ✔️         |          |

# Conclusion
The most popular tools to use overall appear to be PHPStan & PhpCsFixer. 

However it's not a one size fit all solution. Pslam appears to be gaining popularity among projects and is often used alongside PHPStan. And for enforcing code standards PhpCsFixer is the most popular but it's still often paired with PHPCS which has more complex configuration options.

The details in this post will probably not stay up to date for very long since the ecosystem is constantly evolving but I found this analysis interesting when reviewing these tools for my own usage. If you have feedback or can correct me about any of the information in this post please leave me a comment.