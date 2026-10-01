FROM nginx:alpine
COPY robots.txt /usr/share/nginx/html/robots.txt
RUN printf 'server{listen 80;root /usr/share/nginx/html;add_header X-Robots-Tag "noindex, nofollow, noarchive" always;location /{try_files /robots.txt =404;default_type text/plain;}}' > /etc/nginx/conf.d/default.conf
