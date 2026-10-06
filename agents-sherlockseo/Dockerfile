FROM nginx:alpine
RUN printf 'server{listen 80;root /usr/share/nginx/html;index index.html;location /{try_files $uri $uri/ =404;}}' > /etc/nginx/conf.d/default.conf
COPY index.html llms.txt /usr/share/nginx/html/
EXPOSE 80
