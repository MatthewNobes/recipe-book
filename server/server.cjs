//finished version of the app.js file
"use strict";
const express = require("express");
const app = express();
const port = 4444;
//const things = require("./routes/recipe");

//app.use(express.json());
//app.use("/things", things);
//use the things.js file to handle
//endpoints that start with /things

app.get("/", (req, res) => {
  //handle root
  res.send("hello root");
});

app.listen(port, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${port}`);
});
