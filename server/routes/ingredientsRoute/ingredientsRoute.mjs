"use strict";
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
let router = express.Router();

router.route("/").get(async (request, result) => {
  const allIngredients = await prisma.ingredients.findMany();
  result.json(allIngredients);
});

export default router;
