# Build the static site from src/ (model + content per market), then serve it with nginx.
FROM node:22-alpine AS build
WORKDIR /site
COPY src ./src
RUN node src/build.mjs --out /site/dist

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /site/dist /usr/share/nginx/html
EXPOSE 80
