var express = require('express');
var parser = require('body-parser');
var app = express();
var port = 3100;

// Middleware
app.use(parser());

// Routes

app.listen(port, () => {
  console.log('Listening on port: ', port);
});
