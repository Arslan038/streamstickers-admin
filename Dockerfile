# see https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html
# TODO multi-stage build with nginx
FROM node:16

# update packages
RUN apt-get update && apt-get upgrade -y && apt-get install dos2unix -y

# install simple http server for serving static content
RUN npm install -g serve

# set working directory
WORKDIR /local/app

# copy both 'package.json' and 'package-lock.json' / yarn.lock (if available)
COPY package*.json yarn.lock ./

# install project dependencies
RUN yarn install

# copy project files and folders to the current working directory
COPY . .

# copy configs script and run it to switch configs based on environment
RUN dos2unix ./docker-entrypoint.sh \
	&& dos2unix ./docker-copy-configs.sh \
	&& chmod +x *.sh

ARG TARGET
#RUN ./docker-copy-configs.sh $TARGET

# build app for production with minification
RUN yarn build

EXPOSE 3000
ENTRYPOINT [ "/local/app/docker-entrypoint.sh" ]
