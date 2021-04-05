FROM nginx:stable-alpine

#ENV TZ=Europe/Moscow
#RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apk add --update curl gnupg nodejs nodejs-npm
ADD nginx.conf /etc/nginx/nginx.conf
ADD front.conf /etc/nginx/conf.d/default.conf
RUN touch /var/run/nginx.pid && \
    chmod 777 /var/run/nginx.pid && \
    chmod 777 /var/cache/nginx
ENTRYPOINT ["/var/www/front/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]