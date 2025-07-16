FROM nginx:1.28-alpine

COPY tusolucionautomatica.conf /etc/nginx/conf.d/default.conf

COPY ./frontend/* /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
