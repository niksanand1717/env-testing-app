# 1. Use official Node.js image
FROM node:20-slim AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy files
COPY . .

# 4. Install dependencies
RUN npm install

# 5. Build the app
RUN npm run build

# 11. Start the Next.js app
CMD ["npm", "start"]
