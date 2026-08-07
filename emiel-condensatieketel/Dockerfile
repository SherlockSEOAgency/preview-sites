FROM nginx:alpine
RUN printf 'server{listen 80;root /usr/share/nginx/html;index index.html;add_header X-Robots-Tag "noindex, nofollow" always;location /{try_files $uri $uri/ /index.html =404;}}' > /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
