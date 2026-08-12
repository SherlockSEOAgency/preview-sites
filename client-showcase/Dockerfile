FROM nginx:alpine
RUN printf 'server{listen 80;root /usr/share/nginx/html;index index.html;add_header X-Robots-Tag "noindex, nofollow" always;location /{try_files $uri $uri/ =404;}}' > /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html/
RUN rm -f /usr/share/nginx/html/Dockerfile /usr/share/nginx/html/.dockerignore
EXPOSE 80
