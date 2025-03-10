# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install the dependencies
RUN npm install

# Build the app for production
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
