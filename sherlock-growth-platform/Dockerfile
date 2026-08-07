FROM node:20-alpine
RUN printf 'server{listen 80;root /usr/share/nginx/html;index index.html;add_header X-Robots-Tag "noindex, nofollow" always;location /{try_files $uri $uri/ /index.html =404;}}' > /etc/nginx/conf.d/default.conf
WORKDIR /app
COPY server.js index.html ./
ENV PORT=3000
ENV DATA_DIR=/data
EXPOSE 3000
CMD ["node", "server.js"]
