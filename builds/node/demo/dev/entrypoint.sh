#!/bin/ash
cd /var/www/front && npm install --verbose && npm start
exec "$@"