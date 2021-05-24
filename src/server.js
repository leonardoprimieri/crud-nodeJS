const express = require('express');
const router = require('./routes');
const server = express();
const cors = require('cors');

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(router);

server.listen(3001, () => {
  console.log('Server running!');
});
