# Use official Node.js LTS image as the base image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present) to workdir
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to workdir
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js app runs on
EXPOSE 8082

# Start the Next.js app
CMD ["npm", "start"]
