FROM node:buster AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build app
FROM node:buster AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Run the app
FROM node:buster AS runner

# USER root
# RUN useradd -u 5000 node

USER node
WORKDIR /home/node/app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

RUN chown -Rh node:node ./.next

CMD ["yarn", "start"]