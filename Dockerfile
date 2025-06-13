FROM node:20-alpine

WORKDIR /app

RUN npm install -g bun

RUN bun add -D vitepress@v2.0.0-alpha.5

EXPOSE 5173

COPY ./docker-entrypoint.sh /

ENTRYPOINT ["sh", "/docker-entrypoint.sh"]
