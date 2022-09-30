"use strict";
import app from "./app.mjs";

const port = process.env.PORT || 4442;

app.listen(port, (error) => {
  if (error) {
    return console.log("ERROR", error);
  }
  console.log(`Recipe API is listening on port ${port}`);
});
