FROM node:17-alpine as Builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21-alpine
COPY --from=Builder /app/dist /usr/share/nginx/html