FROM nginx:alpine
# Doorverwezen naar asbitech-watson (Jef, 14/10/2026): de image bevat bewust GEEN statische bestanden,
# alleen de redirect. De bronbestanden in deze map blijven in git voor build_static.py.
COPY redirect.conf /etc/nginx/conf.d/default.conf
