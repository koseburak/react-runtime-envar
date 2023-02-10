### Build App ###
FROM node:alpine as builder

WORKDIR /app

COPY package*json ./
RUN npm install

COPY . .
RUN npm run pipeline:build


### Build Runtime Image ###
FROM nginx:1.15.2-alpine

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY .devops/conf /etc/nginx

# Static build
COPY --from=builder /app/build /usr/share/nginx/html/

# Set the App port
EXPOSE 80

# Copy .env file and shell script into container
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

# Make dynamic  executable
RUN chmod +x env.sh

# Execute the env generator shell script and Run Nginx server
CMD ["/bin/sh", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
