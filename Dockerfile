# # ---- PRODUCTION -------
# # build stage
# FROM node:lts-alpine as build-stage
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
#
# # production stage
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /dist /usr/share/nginx/html
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]

# ------- DEV -----------
FROM node:lts-alpine

RUN npm install -g http-server
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]