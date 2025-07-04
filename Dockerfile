FROM nginx
COPY tusolucionautomatica.conf /etc/nginx/conf.d/
COPY . /usr/share/nginx/html
