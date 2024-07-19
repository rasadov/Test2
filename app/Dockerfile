# Stage 1: Build the application
FROM node:19.5.0-alpine as build-stage
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine
# Copy built assets from build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Expose port 80
EXPOSE 80
# Start Nginx and serve the application
CMD ["nginx", "-g", "daemon off;"]