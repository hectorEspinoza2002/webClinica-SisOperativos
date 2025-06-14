# Etapa 1: Compilar Angular
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir contenido con Nginx
FROM nginx:alpine
COPY --from=build /app/dist/frontalm5 /usr/share/nginx/html



