# 1. Use official Node.js image
FROM node:20-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy files
COPY package.json package-lock.json* ./
COPY tsconfig.json ./
COPY next.config.mjs ./
COPY postcss.config.mjs ./
COPY eslint.config.mjs ./
COPY .env ./
COPY public ./public
COPY src ./src

# 4. Install dependencies
RUN npm install

# 5. Build the app
RUN npm run build

# -------------------------------

# 6. Create production image
FROM node:20-alpine AS runner

# 7. Set working directory
WORKDIR /app

# 8. Set NODE_ENV to production
ENV NODE_ENV=production

# 9. Install only production dependencies
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json* ./
RUN npm install

# 10. Copy necessary build output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/.env .env

# 11. Start the Next.js app
CMD ["npm", "start"]
