"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
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
