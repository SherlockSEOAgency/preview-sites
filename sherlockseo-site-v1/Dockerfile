FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html 404.html robots.txt /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY werken-met-sherlock /usr/share/nginx/html/werken-met-sherlock
COPY cases /usr/share/nginx/html/cases
COPY over-ons /usr/share/nginx/html/over-ons
COPY contact /usr/share/nginx/html/contact
COPY privacy /usr/share/nginx/html/privacy
COPY academie /usr/share/nginx/html/academie
EXPOSE 80
