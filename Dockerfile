FROM node:18-alpine AS base

WORKDIR /app

# Stage 1: Install dependencies
FROM base AS deps

# Install required system dependencies
RUN apk add --no-cache libc6-compat

# Copy lock files and install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile && pnpm install sharp

# Stage 2: Build the application
FROM base AS builder

WORKDIR /app

# Copy node_modules and app source
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the App
RUN corepack enable pnpm && pnpm run build

# Stage 3: Production run 
FROM base AS runner

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

RUN chmod -R 777 .next

# Expose app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
