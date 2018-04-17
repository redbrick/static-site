FROM abiosoft/caddy:builder as builder

ARG caddy_version="1.0.3"
ARG plugins="git,cache,minify,prometheus"
ARG enable_telemetry="true"
ARG hugo_version="0.58.1"
ENV HUGO_BINARY hugo_${hugo_version}_linux-64bit

# process wrapper
RUN go get -v github.com/abiosoft/parent
RUN VERSION=${caddy_version} PLUGINS=${plugins} ENABLE_TELEMETRY=${enable_telemetry} /bin/sh /usr/bin/builder.sh

RUN mkdir /usr/local/hugo
ADD https://github.com/spf13/hugo/releases/download/v${hugo_version}/${HUGO_BINARY}.tar.gz /usr/local/hugo/
RUN tar xzf /usr/local/hugo/${HUGO_BINARY}.tar.gz -C /usr/local/hugo/

FROM alpine:3.10
LABEL caddy_version="$caddy_version"
LABEL hugo_version="$hugo_version"

ENV ENABLE_TELEMETRY="$enable_telemetry"
RUN apk add --no-cache \
    git \
    tzdata \
    py-pygments

COPY Caddyfile /etc/Caddyfile
COPY --from=builder /install/caddy /usr/bin/caddy
COPY --from=builder /go/bin/parent /bin/parent
COPY --from=builder /usr/local/hugo/hugo /usr/bin/hugo

# validate install
RUN /usr/bin/caddy -version
RUN /usr/bin/caddy -plugins

VOLUME /root/.caddy /srv
WORKDIR /srv

EXPOSE 2015 9180
ENTRYPOINT ["/bin/parent", "caddy"]
CMD ["--conf", "/etc/Caddyfile", "--log", "stdout", "--agree=False"]
