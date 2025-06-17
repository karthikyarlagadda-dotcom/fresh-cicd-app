# 1. Start from Node.js 18 base image
FROM node:18

# 2. Set working directory in container
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy all other app files
COPY . .

# 5. Tell Docker to expose port 3000
EXPOSE 3000

# 6. Command to run when container starts
CMD ["npm", "start"]

