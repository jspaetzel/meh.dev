FROM ruby:3.0

RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential ca-certificates curl git gnupg \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key \
        | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" \
        > /etc/apt/sources.list.d/nodesource.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends nodejs \
    && rm -rf /var/lib/apt/lists/*

RUN gem install bundler:2.3.25

WORKDIR /srv/jekyll

COPY docker/start-jekyll.sh /usr/local/bin/start-jekyll
RUN chmod +x /usr/local/bin/start-jekyll

EXPOSE 4000

ENTRYPOINT ["start-jekyll"]
