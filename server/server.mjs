//finished version of the app.js file
"use strict";
import express from "express";
const app = express();
const port = 4444;
//const things = require("./routes/recipe");

//app.use(express.json());
//app.use("/things", things);
//use the things.js file to handle
//endpoints that start with /things

app.get("/", (request, result) => {
  result.send("recipe api system");
  //eventually present api docs on this page
});

app.listen(port, (error) => {
  if (error) {
    return console.log("ERROR", error);
  }
  console.log(`Back-end is listening on port ${port}`);
});
