---
layout: post
title:  "The top PHP static code analysis tools of 2025"
date:   2021-03-11T01:38:15.487804-08:00
last_modified_at: 2025-01-30
tags:
- PHP
- CI
- Static Analysis
---

The PHP community has a diverse ecosystem of static analysis tools which can make it somewhat difficult to decide which tools to use. Hopefully this post helps you decide which of these tools you'll use.

This post separates these tools into one of two types depending on their purpose. The first section is static analysis for the purpose of identifying bugs. The later section is for maintenance of code style/formatting.

## Static Code Analysis Tools
* [PHPStan](https://github.com/phpstan/phpstan) is the most commonly used tool and also one of the youngest. It has been rapidly adopted since it's release in 2016. It'll discover bugs in your code without running the code.

* [Psalm](https://github.com/vimeo/psalm) was also released in 2016 and has grown in popularity a little more slowly. It claims more features out of the box and has a focus is on type-related bugs.

* [Scrutinizer](https://scrutinizer-ci.com/) is the most popular commercial option in use by open-source projects and has been around longer then its open-source counterparts. It's free for open-source projects but is only available as a hosted solution.

Let's look at what some popular open-source PHP project use. This table only includes repositories which have at least 1K GitHub stars, and which implement the static analysis tools as a component of their continuous integration systems.

|                                                                          | ⭐     | [PHPStan](https://github.com/phpstan/phpstan) | [Psalm](https://github.com/vimeo/psalm) | [Scrutinizer](https://scrutinizer-ci.com/) |
|--------------------------------------------------------------------------|-------|-----------------------------------------------|-----------------------------------------|--------------------------------------------|
| [Laravel](https://github.com/laravel/framework)                          | 33K   | ✔️                                            |                                         |                                            |
| [Symfony](https://github.com/symfony/symfony)                            | 29.9K |                                               | ✔️                                      |                                            |
| [Composer](https://github.com/composer/composer)                         | 28.8K | ✔️                                            |                                         |                                            |
| [NextCloud](https://github.com/nextcloud/server)                         | 28.5K |                                               | ✔️                                      | ✔️                                         |
| [Guzzle](https://github.com/guzzle/guzzle)                               | 23.3K | ✔️                                            | ✔️                                      |                                            |
| [Monolog](https://github.com/Seldaek/monolog)                            | 21.1K | ✔️                                            |                                         |                                            |
| [PHPUnit](https://github.com/sebastianbergmann/phpunit)                  | 19.8K |                                               | ✔️                                      |                                            |
| [PHP-Parser](https://github.com/nikic/PHP-Parser)                        | 17.1K | ✔️                                            |                                         |                                            | 
| [Carbon](https://github.com/CarbonPHP/carbon)                            | 16.6K | ✔️                                            | ✔️                                      |                                            |
| [Yii2](https://github.com/yiisoft/yii2)                                  | 14.3K |                                               |                                         | ✔️                                         |
| [PhpSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet)            | 13.5K | ✔️                                            |                                         |                                            |
| [Flysystem](https://github.com/thephpleague/flysystem)                   | 13.4K | ✔️                                            |                                         | ✔️                                         |
| [PHPDotEnv](https://github.com/vlucas/phpdotenv)                         | 13.3K | ✔️                                            | ✔️                                      |                                            |
| [Slim](https://github.com/slimphp/Slim)                                  | 12K   | ✔️                                            | ✔️                                      |                                            |
| [EmailValidator](https://github.com/egulias/EmailValidator/)             | 11.5K |                                               | ✔️                                      |                                            | 
| [Phalcon](https://github.com/phalcon/cphalcon)                           | 10.8K | ️                                             | ✔️                                      |                                            |
| [Doctrine](https://github.com/doctrine/orm)                              | 10K   | ✔️                                            |                                         |                                            |
| [Pest](https://github.com/pestphp/pest)                                  | 9.9K  | ✔️                                            |                                         |                                            |
| [php-jwt](https://github.com/firebase/php-jwt)                           | 9.5K  | ✔️                                            | ️                                       |                                            |
| [CakePHP](https://github.com/cakephp/cakephp)                            | 8.7K  | ✔️                                            | ✔️                                      |                                            |
| [Twig](https://github.com/twigphp/Twig)                                  | 8.2K  | ✔️                                            |                                         |                                            |
| [Predis](https://github.com/predis/predis)                               | 7.6K  | ✔️                                            |                                         |                                            |
| [AWS SDK](https://github.com/aws/aws-sdk-php)                            | 6.1K  | ✔️                                            |                                         |                                            |
| [Elasticsearch SDK](https://github.com/elastic/elasticsearch-php)        | 5.3K  | ✔️                                            |                                         |                                            |
| [php-amqplib](https://github.com/php-amqplib/php-amqplib)                | 4.5K  |                                               |                                         | ✔️                                         |
| [Stripe SDK](https://github.com/stripe/stripe-php)                       | 3.8K  | ✔️                                            |                                         |                                            |
| [Mediawiki](https://github.com/wikimedia/mediawiki)                      | 4.4K+ |                                               |                                         |                                            |
| [Maxmind GeoIP2](https://github.com/maxmind/GeoIP2-php)                  | 2.4K  | ✔️                                            |                                         |                                            |
| [Paratest](https://github.com/paratestphp/paratest)                      | 2.3K  | ✔️                                            | ️                                       |                                            |
| [Sentry SDK](https://github.com/getsentry/sentry-php)                    | 1.8K  | ✔️                                            | ✔️                                      |                                            |
| [OpenTelemetry PHP](https://github.com/open-telemetry/opentelemetry-php) | 776   | ✔️                                            | ✔️                                      | ✔️                                         |
| [OpenSearch PHP](https://github.com/opensearch-project/opensearch-php)   | 115   | ✔️                                            |                                         |                                            |

There are some other fairly popular tools worth mentioning but which were not used by enough projects to be included in the table above.
* [Phan](https://github.com/phan/phan) isn't used by any of the projects here besides MediaWiki that I could find. It was created originally at Etsy and appears to be the primary tool used by Wikipedia's MediaWiki project. The advertised upside of using Phan is that it has a focus on minimizing false-positives. This makes it trivial to use, but it might catch fewer issues compared to others.

* [PHPStorm Code Inspections](https://www.jetbrains.com/help/phpstorm/code-inspection.html): The inspection tools built into PHPStorm are impressive and can identify many potential issues without any additional tooling.

* [PHP Mess Detector](https://github.com/phpmd/phpmd): This is an older static analysis tool which offers some different functionality. Besides identifying potential bugs it also can help identifying generally poor code. It's very mature and may be more useful for targeted project analysis.

* [Sonarqube](https://www.sonarqube.org/): Sonarqube is a commercial static analysis product. It's community edition is good at detecting bugs, vulnerabilities, and generally for improving code quality. They also provides an [IDE extension, Sonarlint](https://www.sonarlint.org/) which works well to supplement the CI offerings.

* [PHP Inspections (EA Extended)](https://github.com/kalessil/phpinspectionsea): This is a plugin for IntelliJ/PHPStorm which supplements the inspections built into PHPStorm.

* [Qodana](https://www.jetbrains.com/qodana/): This is a newer commercial product from JetBrains which is still in early access. It's a hosted solution which can be used to analyze code and identify bugs and vulnerabilities.

## Style Tools

* [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) is the original code standards tool for PHP and dates back to 2006. It's primary use is to establish standards and identify violations. It does however also provide a package `phpcbf` which can sometimes automatically fix violations. PHPCS is extremely mature and very flexible and comes with a massive selection of pre-written "Sniffs" available to use.

* [PhpCsFixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) is supported by the popular Symfony framework. This tool automatically applies any defined code styles to code when it's run. e.g. `php-cs-fixer fix src`. This seems to be the leading choice for a majority of projects.

Some other interesting style tools I found that weren't heavily in use while reviewing these projects
* [Composer Normalize Action](https://github.com/marketplace/actions/composer-normalize-action) Tool to keep your composer file formatted consistently

Here's a selection of some popular packages today.

|                                                                          | ⭐      | [PhpCsFixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) | [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) |
|--------------------------------------------------------------------------|--------|------------------------------------------------------------|-------------------------------------------------------|
| [Laravel](https://github.com/laravel/framework)                          | 33K    | ✔️                                                         |                                                       |
| [Symfony](https://github.com/symfony/symfony)                            | 29.9K  | ✔️                                                         |                                                       |
| [Composer](https://github.com/composer/composer)                         | 28.8K  | ✔️                                                         |                                                       |
| [NextCloud](https://github.com/nextcloud/server)                         | 28.5K  | ✔️                                                         |                                                       |
| [Guzzle](https://github.com/guzzle/guzzle)                               | 23.3K  | ✔️                                                         |                                                       |
| [Monolog](https://github.com/Seldaek/monolog)                            | 21.1K  | ✔️                                                         |                                                       |
| [PHPUnit](https://github.com/sebastianbergmann/phpunit)                  | 19.8K  | ✔️                                                         |                                                       |
| [Wordpress](https://github.com/WordPress/WordPress)                      | 18.4K+ |                                                            | ✔️                                                    |
| [PHP-Parser](https://github.com/nikic/PHP-Parser)                        | 17.1K  | ✔️                                                         |                                                       |
| [Carbon](https://github.com/CarbonPHP/carbon)                            | 16.6K  | ✔️                                                         |                                                       |
| [Yii2](https://github.com/yiisoft/yii2)                                  | 14.3K  |                                                            | ✔️                                                    |
| [PhpSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet)            | 13.5K  | ✔️                                                         | ✔️                                                    |
| [Flysystem](https://github.com/thephpleague/flysystem)                   | 13.4K  | ✔️                                                         |                                                       | 
| [Slim](https://github.com/slimphp/Slim)                                  | 12K    |                                                            | ✔️                                                    |
| [Phalcon](https://github.com/phalcon/cphalcon)                           | 10.8K  | ✔️                                                         | ✔️                                                    |
| [Doctrine](https://github.com/doctrine/orm)                              | 10K    |                                                            | ✔️                                                    |
| [php-jwt](https://github.com/firebase/php-jwt)                           | 9.5K   | ✔️                                                         |                                                       |
| [CakePHP](https://github.com/cakephp/cakephp)                            | 8.7K   |                                                            | ✔️                                                    |
| [Twig](https://github.com/twigphp/Twig)                                  | 8K     | ✔️                                                         |                                                       |
| [Predis](https://github.com/predis/predis)                               | 7.6K   | ✔️                                                         |                                                       |
| [php-amqplib](https://github.com/php-amqplib/php-amqplib)                | 4.5K   |                                                            | ✔️                                                    |
| [Stripe SDK](https://github.com/stripe/stripe-php)                       | 3.8K   | ✔️                                                         |                                                       |
| [Drupal](https://github.com/drupal/drupal)                               | 4.1K+  |                                                            | ✔️                                                    |
| [Mediawiki](https://github.com/wikimedia/mediawiki)                      | 4.4K+  |                                                            | ✔️                                                    |
| [Maxmind GeoIP2](https://github.com/maxmind/GeoIP2-php)                  | 2.4K   | ✔️                                                         |                                                       |
| [Paratest](https://github.com/paratestphp/paratest)                      | 2.2K   |                                                            | ✔️                                                    |
| [Sentry SDK](https://github.com/getsentry/sentry-php)                    | 1.8K   | ✔️                                                         |                                                       |
| [OpenTelemetry PHP](https://github.com/open-telemetry/opentelemetry-php) | 776    | ✔️                                                         | ✔️                                                    |
| [OpenSearch PHP](https://github.com/opensearch-project/opensearch-php)   | 115    | ✔️                                                         |                                                       |

### PhpCsFixer Utilities
PhpCsFixer isn't the most opinionated tool. A couple of projects have cropped up that ship opinionated configurations for this tool.
* [Pint](https://github.com/laravel/pint) opinionated php-sc-fixer by the Laravel team.
* [Styleci](https://styleci.io/) a hosted version fixer by the Laravel team. It fixes styles quietly in the background as developers make changes by pulling the code, restyling it, and pushing it back to the main repository.
* [PHP.Style](https://php.style/) my own opinionated configuration.

## Conclusion
The most popular tools to use overall appear are PHPStan & PhpCsFixer.

However, it's not a one size fit all solution. Psalm has strong popularity and is often used alongside PHPStan. And for enforcing code standards, PhpCsFixer is the most popular, but it's still often paired with PHPCS which has more complex configuration options.

I found this analysis interesting when reviewing these tools for my own usage. If you have feedback or can correct me about any of the information in this post please leave me a comment.

## News & Changelog
This post is periodically updated to keep up with the latest trends.

### Jan 2025
* Audited the status of all projects
* Removed style ci from style tools table
* PHPStan picked up a few new projects this year and continues growing in popularity
* PHPStan released [2.0 version](https://phpstan.org/blog/phpstan-2-0-released-level-10-elephpants) in november. First major release in a while.
* PHPCS picked up a few new projects from this sample group and is still going strong though PhpCsFixer remains the more popular choice overall.
* Added a few popular projects.

### Jan 2024
* Updated the status of all projects on this page. Added a few newer notable projects.
* PHPStan is up one and Psalm is down on the same project. Removed Phan from the table which is still only used by MediaWiki.
* Jetbrains is previewing a new code analysis tool, Qodana, which is now included in the list. Only one project I checked is using it so far.
* Things to look forward to this year: PHPStan 2.0 & expanded coding style standards w/ PERCS 2.0: https://www.php-fig.org/per/coding-style/

### Jan 2023
* Updated the status of all projects on this page. Most projects gained some popularity but order stayed roughly the same.
* PHPStan, PHP-CS-Fixer, and Scrutinizer grew in popularity.
* Add section about php-cs-fixer utilities.

### Jan 2022
Checked the status of all projects in these lists and updated stats. Psalm continues to grow in popularity, a couple projects added it since they were last checked. Otherwise, no major changes.

### March 2021
First version of this post
