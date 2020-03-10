var express = require("express");
var parser = require("body-parser");
var app = express();
var port = 3100;
const router = require("../server/router");

// Middleware
app.use(parser.json());
app.use("/", router);

//SET UP ROUTER

// Routes

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
