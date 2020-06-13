require("./models/User");
const express = require("express");
const nunjucks = require("nunjucks");
const router = require("./routes");
const mongoose = require("mongoose");
const server = express();

mongoose.connect("mongodb://127.0.0.1:27017/CRUD", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.Promise = global.Promise;

server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

server.use(express.json());
server.use(router);

server.set("view engine", "njk");

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server.listen(3000, () => {
  console.log("Server running!");
});
