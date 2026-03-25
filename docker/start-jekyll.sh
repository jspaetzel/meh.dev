#!/bin/sh
set -eu

bundle check >/dev/null 2>&1 || bundle install

if [ ! -d node_modules ]; then
    npm install
fi

exec bundle exec jekyll serve --host 0.0.0.0 --watch --force_polling --verbose
