---
layout: post
title:  "The top PHP static code analysis tools of 2022"
date:   2021-03-11T01:38:15.487804-08:00
edited: 2022-09-08T20:31:27.286592-06:00
tags:
- PHP
- CI
- Static Analysis
---

The PHP community has a diverse ecosystem of static analysis tools which can make it somewhat difficult to decide which tools to use. Hopefully this post helps you decide which of these tools you'll use.

This post separates these tools into one of two types depending on their purpose. The first section is static analysis for the purpose of identifying bugs. The later section is for maintenance of code style.

# Static Code Analysis Tools
* [PHPStan](https://github.com/phpstan/phpstan) is the most commonly used tool and also one of the youngest. It has been rapidly adopted since it's release in 2016. It'll discover bugs in your code without running the code.

* [Psalm](https://github.com/vimeo/psalm) was also released in 2016 and has grown in popularity a little more slowly. It claims more features out of the box and has a focus is on type-related bugs.

* [Scrutinizer](https://scrutinizer-ci.com/) is the most popular commercial option in use by open-source projects and has been around longer then its open-source counterparts. It's free for open-source projects but is only available as a hosted solution.

* [Phan](https://github.com/phan/phan) isn't used by many of the projects I reviewed but is popular and well-supported. It was created at Etsy and appears to be the primary tool used by Wikipedia's MediaWiki project. The advertised upside of using Phan is that it has a focus on minimizing false-positives. This makes it trivial to use but it might catch fewer issues compared to the other options.

Let's look at what some popular open-source PHP project use. This table only includes repositories which have at least 1K GitHub stars, and which implement the static analysis tools as a component of their continuous integration systems.

|                                                                   | ⭐     | [PHPStan](https://github.com/phpstan/phpstan) | [Psalm](https://github.com/vimeo/psalm) | [Scrutinizer](https://scrutinizer-ci.com/) | [Phan](https://github.com/phan/phan) |
|-------------------------------------------------------------------|-------|-----------------------------------------------|-----------------------------------------|--------------------------------------------|--------------------------------------|
| [Symfony](https://github.com/symfony/symfony)                     | 26.3K |                                               | ✔️                                      |                                            |                                      |
| [Composer](https://github.com/composer/composer)                  | 26K   | ✔️                                            |                                         |                                            |                                      |
| [Guzzle](https://github.com/guzzle/guzzle)                        | 21.4K | ✔️                                            | ✔️                                      |                                            |                                      |
| [Monolog](https://github.com/Seldaek/monolog)                     | 19.4K | ✔️                                            |                                         |                                            |                                      |
| [PHPUnit](https://github.com/sebastianbergmann/phpunit)           | 18.1K |                                               | ✔️                                      |                                            |                                      |
| [NextCloud](https://github.com/nextcloud/server)                  | 17.9K |                                               | ✔️                                      | ✔️                                         |                                      |
| [Yii2](https://github.com/yiisoft/yii2)                           | 13.9K |                                               |                                         | ✔️                                         |                                      |
| [PHPDotEnv](https://github.com/vlucas/phpdotenv)                  | 11.7K | ✔️                                            | ✔️                                      |                                            |                                      |
| [Slim](https://github.com/slimphp/Slim)                           | 11.2K | ✔️                                            |                                         |                                            |                                      |
| [Phalcon](https://github.com/phalcon/phalcon)                     | 10.5K | ️                                             | ️✔                                      |                                            |                                      |
| [Doctrine](https://github.com/doctrine/orm)                       | 9K    | ✔️                                            | ✔                                       |                                            |                                      |
| [Assert](https://github.com/webmozarts/assert)                    | 7K    |                                               | ✔️                                      |                                            |                                      |
| [AWS SDK](https://github.com/aws/aws-sdk-php)                     | 5.4K  | ✔️                                            |                                         |                                            |                                      |
| [Elasticsearch SDK](https://github.com/elastic/elasticsearch-php) | 4.8K  | ✔️                                            |                                         |                                            |                                      |
| [php-amqplib](https://github.com/php-amqplib/php-amqplib)         | 4K    |                                               |                                         | ✔️                                         |                                      |
| [Stripe SDK](https://github.com/stripe/stripe-php)                | 3K    | ✔️                                            |                                         |                                            |                                      |
| [Mediawiki](https://github.com/wikimedia/mediawiki)               | 2.8K* |                                               |                                         |                                            | ✔️                                   |
| [Maxmind GeoIP2](https://github.com/maxmind/GeoIP2-php)           | 2K    | ✔️                                            |                                         |                                            |                                      |
| [Paratest](https://github.com/paratestphp/paratest)               | 1.9K  | ✔️                                            | ✔️                                      |                                            |                                      |
| [Sentry SDK](https://github.com/getsentry/sentry-php)             | 1.6K  | ✔️                                            | ✔️                                      |                                            |                                      |

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

|                                                                   | ⭐      | [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) | [PhpCsFixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) | [Style CI](https://styleci.io/) |
|-------------------------------------------------------------------|--------|-------------------------------------------------------|------------------------------------------------------------|---------------------------------|
| [Laravel](https://github.com/laravel/laravel)                     | 67.8K  |                                                       |                                                            | ✔️                              |
| [Symfony](https://github.com/symfony/symfony)                     | 26.3K  |                                                       | ✔️                                                         |                                 |
| [Composer](https://github.com/composer/composer)                  | 26K    |                                                       | ✔️                                                         |                                 |
| [Guzzle](https://github.com/guzzle/guzzle)                        | 21.4K  |                                                       | ✔️                                                         |                                 |
| [Monolog](https://github.com/Seldaek/monolog)                     | 19.4K  |                                                       | ✔️                                                         |                                 |
| [PHPUnit](https://github.com/sebastianbergmann/phpunit)           | 18.1K  |                                                       | ✔️                                                         |                                 |
| [NextCloud](https://github.com/nextcloud/server)                  | 17.9K  |                                                       | ✔️                                                         |                                 |
| [Wordpress](https://github.com/WordPress/WordPress)               | 15.8K* | ✔️                                                    |                                                            |                                 |
| [Yii2](https://github.com/yiisoft/yii2)                           | 13.9K  |                                                       | ✔️                                                         |                                 |
| [Slim](https://github.com/slimphp/Slim)                           | 11.2K  | ✔️                                                    |                                                            |                                 |
| [Phalcon](https://github.com/phalcon/phalcon)                     | 10.5K  | ✔️                                                    | ✔️                                                         |                                 |
| [Doctrine](https://github.com/doctrine/orm)                       | 9K     | ✔️                                                    |                                                            |                                 |
| [php-jwt](https://github.com/firebase/php-jwt)                    | 7.9K   |                                                       | ✔️                                                         |                                 |
| [Twig](https://github.com/twigphp/Twig)                           | 7.4K   |                                                       | ✔️                                                         |                                 |
| [Assert](https://github.com/webmozarts/assert)                    | 7K     |                                                       | ✔️                                                         |                                 |
| [Predis](https://github.com/predis/predis)                        | 7K     |                                                       | ✔️                                                         |                                 |
| [Elasticsearch SDK](https://github.com/elastic/elasticsearch-php) | 4.8K   | ✔️                                                    | ✔️                                                         |                                 |
| [php-amqplib](https://github.com/php-amqplib/php-amqplib)         | 4K     | ✔️                                                    |                                                            |                                 |
| [Stripe SDK](https://github.com/stripe/stripe-php)                | 3.6K   |                                                       | ✔️                                                         |                                 |
| [Drupal](https://github.com/drupal/drupal)                        | 3.5K*  | ✔️                                                    |                                                            |                                 |
| [Mediawiki](https://github.com/wikimedia/mediawiki)               | 2.8K*  | ✔️                                                    |                                                            |                                 |
| [Maxmind GeoIP2](https://github.com/maxmind/GeoIP2-php)           | 2K     | ✔️                                                    | ✔️                                                         |                                 |
| [Paratest](https://github.com/paratestphp/paratest)               | 1.9K   | ✔️                                                    |                                                            |                                 |
| [Sentry SDK](https://github.com/getsentry/sentry-php)             | 1.6K   |                                                       | ✔️                                                         |                                 |

# Conclusion
The most popular tools to use overall appear to be PHPStan & PhpCsFixer. 

However, it's not a one size fit all solution. Psalm appears to be gaining popularity among projects and is often used alongside PHPStan. And for enforcing code standards PhpCsFixer is the most popular but it's still often paired with PHPCS which has more complex configuration options.

The details in this post will probably not stay up to date for very long since the ecosystem is constantly evolving, but I found this analysis interesting when reviewing these tools for my own usage. If you have feedback or can correct me about any of the information in this post please leave me a comment.

# Update Jan 2022

Checked the status of all projects in these lists and updated stats. Psalm continues to grow in popularity, a couple projects added it since they were last checked. Otherwise, no major changes.
