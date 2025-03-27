########################
# BUILDER
########################
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

# disable nextjs telemetry
RUN npx next telemetry disable

# Install and build
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install --omit=dev
COPY src /usr/src/app/src
COPY public /usr/src/app/public
RUN npm run build

########################
# Production stage
########################
FROM node:20-alpine AS production
WORKDIR /usr/src/app

# disable nextjs telemetry
RUN npx next telemetry disable


# Create a non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001 -G nodejs
RUN chown -R nextjs:nodejs /usr/src/app

COPY --from=builder --chown=nextjs:nodejs /usr/src/app/package*.json ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/tsconfig.json ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next ./.next

# Set the environment variable for production
ENV NODE_ENV=production

# Grant access to assets  
RUN chmod -R 755 /usr/src/app/public
USER nextjs
EXPOSE 3000
CMD ["npm", "start"]

# ########################
# # Development stage
# ########################
# FROM node:20-alpine AS development
# WORKDIR /usr/src/app

# # Copy necessary files from the builder stage
# COPY --from=builder /usr/src/app/package*.json ./
# COPY --from=builder /usr/src/app/public ./public
# COPY --from=builder /usr/src/app/.next ./.next
# COPY --from=builder /usr/src/app/node_modules ./node_modules

# EXPOSE 3000
# CMD ["npm", "start"]
