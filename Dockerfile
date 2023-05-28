# Use an official Node.js 18 base image
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci --production

# Copy the rest of the application files
COPY . .

# Build your application
RUN npm run build 

# Use a lightweight Node.js 18 base image for production
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the built app from the build stage
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./package.json

# Install serve to run the production build
RUN npm install -g serve

# Set the environment variable
ENV NODE_ENV production

# Expose the desired port (change 3000 to your app's port if needed)
EXPOSE 3000

# Start your application
CMD ["serve", "-s", "build"]
