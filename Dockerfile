# Use an official Node.js runtime as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Compile TypeScript to JavaScript and generate prisma client
RUN npm run build && npx prisma generate

# Expose the application's port
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]