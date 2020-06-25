import express = require("express");

// Create a new express application instance
const app: express.Application = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/home", function (req, res) {
  res.send("Home Page!");
});

app.get("/about", function (req, res) {
  res.send("About Page!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
