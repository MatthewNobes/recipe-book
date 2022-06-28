"use strict";
import express from "express";
let router = express.Router();

router.route("/").get((request, result) => {
  result.send("all recipes here");
});

export default router;
