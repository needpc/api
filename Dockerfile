FROM node:10.2-alpine

LABEL Aurelien PERRIER <a.perrier89@gmail.com>

# Move workdir
WORKDIR /srv/app

# Bundle app source
COPY . .

# Upgrade NPM
RUN npm install -g npm

# Install packages
RUN npm install

EXPOSE 8080

ENTRYPOINT ["npm", "start"]