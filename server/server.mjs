"use strict";
import express from "express";
import cors from "cors";
import router from "./routes/index.mjs";

const app = express();
const port = 4444;

app.use(express.json());
app.use(cors());
app.use("/api", router);
//app.use("/api/recipes", recipes);
//app.use("/api/ingredients", ingredients);

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
