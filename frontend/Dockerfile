FROM node:20-alpine3.17 AS builder
ENV NODE_ENV production
WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm install --production
COPY . .
RUN npm run build
RUN ls

# stage 2
# from the last version of nginx
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=builder /app/build .
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]