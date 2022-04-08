---
layout: post
title:  "PHPStyle: Making PHP Prettier"
date: 2022-04-07T20:17:34.132211-07:00
edited: 2022-04-07T20:17:34.132211-07:00
---

Why doesn't PHP have more uniform, opinionated, styles? We see it with so many other languages...

* Go: [gofmt](https://go.dev/blog/gofmt) automatically formats Go source code. According to go.dev, 70% of Go packages in the wild are formatted with gofmt.
* JavaScript: [Prettier](https://prettier.io/) is an opinionated code formatted used by many packages.
* Python: [Black](https://pypi.org/project/black/), the uncompromising Python code formatter.
* C#: A decent formatter is built into Visual Studio, nothing additional required. Or you can go with a more opinionated option like [CSharpier](https://github.com/belav/csharpier).
* Java: There's lots of options for Java. For instance, a popular option is [Google's standard formatter](https://github.com/google/google-java-format).

## What options do PHP developers have?

In typical PHP fashion, we have a lot choices... This is a blessing and a curse working in such a mature language. I uncovered while [researching static analysis tools](php-static-analysis-tools) that there are two dominate tools for styling php, neither very opinionated out of the box.

**[PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) & PHP-CS-Fixer**

The main difference between these two is that PHP-CS-Fixer is fully automated. Once it's configured any issues it finds it will always fix. 

PHP_CodeSniffer is more likely to tell you what's wrong and may not be able to fix issues. You can have it try to fix issues by running it's alt command, phpcbf, but this only works half of the time.

I won't get into specific details about how to install or run these tools, the documentation is great if you want to check that out. But I will briefly explain how these are configured to give more context.

### PHP_CodeSniffer Configuration

PHP_CodeSniffer is the original style tool for PHP, it's been around since 2009!

Configured with a `phpcs.xml` file or a `phpcs.xml.dist` file, this project is highly un-opinionated. The most standardized configs are the PSR styles included with the package, however many projects override these defaults and in general projects that use phpcs do not share a common style.

Given it's age it's not surprising that it uses XML for configuration. Back in 2009, everything was configured with XML. [Checkout the config used by the PHP_CodeSniffer project itself as an example.](https://github.com/squizlabs/PHP_CodeSniffer/blob/ed83c67a1dc21096a8b31c5426a541eb2b42f176/phpcs.xml.dist)

Checkout some configs of a few large projects
* [Wordpress](https://github.com/WordPress/wordpress-develop/blob/2e5de394c7ce31700c722ebe42e7011a4c293b33/phpcs.xml.dist)
* [Doctrine](https://github.com/doctrine/orm/blob/1ffb9152f76bd3d332d5275bd2272d3984bcf3d6/phpcs.xml.dist)
* [MediaWiki](https://github.com/wikimedia/mediawiki/blob/master/.phpcs.xml)
* [Drupal](https://github.com/drupal/core/blob/807eaa93fd4a1df145d656bad75641b1e2396849/phpcs.xml.dist)

### Configuring PHP-CS-Fixer

PHP-CS-Fixer is the new kid on the block. It was release in 2015 and is developed by Sensio Labs who also develops Symfony, one of the most popular PHP frameworks. It's also fairly un-opinionated, and again, most projects write their own configs.

It's configured with a PHP file, sometimes as `.php_cs`, or `.php-cs-fixer.dist.php`, or `.php-cs-fixer.php`. [Checkout the config used by the PHP-CS-Fixer project itself as an example.](https://github.com/FriendsOfPHP/PHP-CS-Fixer/blob/aa805a8a4d8384c71a1367fceb57a081a4d969e4/.php-cs-fixer.dist.php)

When I first looked at one of these configurations it looked confusing enough that I didn't even _try_ to use this tool. The setup also isn't straightforward. However, it's not as scary as it looks, and this tool does work very well once configured.

Checkout some configs of a few large projects
* [Symfony](https://github.com/symfony/symfony/blob/86e87a2ded42cfcd3e25b62fa858baadf1e2ff75/.php-cs-fixer.dist.php)
* [Composer](https://github.com/composer/composer/blob/54063964a7eba4fac568894e39a0df3a0a27fa50/.php-cs-fixer.php)
* [Guzzle](https://github.com/guzzle/guzzle/blob/82ca75f0b1f130f018febdda29af13086da5dbac/.php-cs-fixer.dist.php)
* [Monolog](https://github.com/Seldaek/monolog/blob/248673e85824f9f910738d870e73eafc7654213f/.php_cs)

# Introducing PHPStyle ✨

Confused yet? In my quest for quickly applying styles to my projects I instead discovered that there's not a single right answer. **PHP developers develop new standards for every project.** Sometimes using the same tools, and sometimes giving up and not using any automated tools at all. 🙁

So I've created yet another project to make this journey easier for my own projects, and maybe yours too.

PHPStyle is easy to use, opinionated, and configured with a Neon/Yaml file (not PHP or XML). It uses PHP-CS-Fixer under the hood so as that project improves this one will as well.

## How to use PHPStyle

1. Require the package
```bash
composer require jspaetzel/phpstyle --dev
```

2. Run the [setup script](https://github.com/jspaetzel/phpstyle/blob/main/phpstyle-setup): 

```bash
./vendor/bin/phpstyle-setup
```

> 🗒 Note: This script is for convenience, you can alternatively do the same steps manually by [installing php-cs-fixer](https://cs.symfony.com/#installation) and copying [this .php-cs-fixer.dist.php file](https://github.com/jspaetzel/phpstyle/blob/main/.php-cs-fixer.dist.php) to your project root.

3. Create/review the `phpstyle.neon` configuration file. Feel free to make changes to this file again at any time.

```yaml
parameters:
    php: 7.4
    risky: false
    paths:
        - src
        - tests
    excludePaths:
        - src/path/you/want/to/skip
        - src/or/a/file-to-skip.php
```

4. Run php-cs-fixer to fix your code
```bash
./vendor/bin/php-cs-fixer fix
```

> 🗒 Note: php-cs-fixer is integrated with PHPStorm and other editors and so PHPStyle should work with them as well.

That's it, your code is styled!