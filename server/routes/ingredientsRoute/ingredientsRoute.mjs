"use strict";
import express from "express";
let router = express.Router();

router.route("/").get((request, result) => {
  result.json({ name: "matt" });
});

export default router;
