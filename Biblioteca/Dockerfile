FROM node

WORKDIR /src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3333

CMD ["node", "server.ts"]