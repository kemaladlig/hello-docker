# Stage 1: Build Stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Runtime Stage
FROM node:18-alpine

WORKDIR /app

# Copy the build and necessary files from the build stage
COPY --from=build /app /app

EXPOSE 3000

CMD ["npm", "start"]
