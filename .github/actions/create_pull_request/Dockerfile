FROM alpine:3

COPY assets/entrypoint.sh /root/entrypoint.sh

RUN apk --update --no-cache add curl jq \
 && chmod +x /root/entrypoint.sh

 ENTRYPOINT [ "/root/entrypoint.sh" ]

