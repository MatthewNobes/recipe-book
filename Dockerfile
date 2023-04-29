# Use a Node 16 base image
FROM node:18-alpine 

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build

# Set the env to "production"
ENV NODE_ENV production

# Expose the port on which the app will be running 
EXPOSE 3000

# Start the app
CMD [ "npx", "serve", "build" ] 