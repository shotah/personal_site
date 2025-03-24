FROM node:alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production image
FROM node:alpine AS production

WORKDIR /app

COPY --from=base /src/app/package*.json ./
COPY --from=base /src/app/.next ./.next
COPY --from=base /src/app/public ./public
COPY --from=base /src/app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]