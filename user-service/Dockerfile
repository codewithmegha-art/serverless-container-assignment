# Use Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose correct port
EXPOSE 3000

# Start the service
CMD ["npm", "start"]
