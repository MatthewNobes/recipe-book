"use strict";
import express from "express";
let router = express.Router();

router.route("/").get((request, result) => {
  result.send("all ingredients here");
});

export default router;
