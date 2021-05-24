const express = require('express');
const router = require('./routes');
const server = express();

server.use(express.urlencoded({ extended: true }));

server.use(express.json());
server.use(router);

server.listen(3001, () => {
  console.log('Server running!');
});
