"use strict";
import express from "express";
import { getAllRecipes } from "./getAllRecipes.mjs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
let router = express.Router();

router.route("/").get(async (request, result) => {
  const allRecipes = await prisma.recipe.findMany();
  result.json(allRecipes);
});

export default router;
