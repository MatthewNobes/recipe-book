"use strict";
import express from "express";
import { getAllRecipes } from "./getAllRecipes.mjs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
let router = express.Router();

const testRecipes = [
  {
    recipeName: "Curry",
    recipeDescription: "A tasty curry",
    recipeDifficultyRating: 3,
  },
  {
    recipeName: "Chicken Kiev",
    recipeDescription: "A chicken stuffed with garlic butter",
    recipeDifficultyRating: 2,
  },
  {
    recipeName: "Curry",
    recipeDescription: "A tasty curry",
    recipeDifficultyRating: 3,
  },
  {
    recipeName: "Chicken Kiev",
    recipeDescription: "A chicken stuffed with garlic butter",
    recipeDifficultyRating: 2,
  },
  {
    recipeName: "Curry",
    recipeDescription: "A tasty curry",
    recipeDifficultyRating: 3,
  },
  {
    recipeName: "Chicken Kiev",
    recipeDescription: "A chicken stuffed with garlic butter",
    recipeDifficultyRating: 2,
  },
  {
    recipeName: "Curry",
    recipeDescription: "A tasty curry",
    recipeDifficultyRating: 3,
  },
  {
    recipeName: "Chicken Kiev",
    recipeDescription: "A chicken stuffed with garlic butter",
    recipeDifficultyRating: 2,
  },
  {
    recipeName: "Curry",
    recipeDescription: "A tasty curry",
    recipeDifficultyRating: 3,
  },
  {
    recipeName: "Chicken Kiev",
    recipeDescription: "A chicken stuffed with garlic butter",
    recipeDifficultyRating: 2,
  },
  {
    recipeName: "Curry",
    recipeDescription: "A tasty curry",
    recipeDifficultyRating: 3,
  },
  {
    recipeName: "Chicken Kiev",
    recipeDescription: "A chicken stuffed with garlic butter",
    recipeDifficultyRating: 2,
  },
  {
    recipeName: "Curry",
    recipeDescription: "A tasty curry",
    recipeDifficultyRating: 3,
  },
  {
    recipeName: "Chicken Kiev",
    recipeDescription: "A chicken stuffed with garlic butter",
    recipeDifficultyRating: 2,
  },
  {
    recipeName: "Curry",
    recipeDescription: "A tasty curry",
    recipeDifficultyRating: 3,
  },
  {
    recipeName: "Chicken Kiev",
    recipeDescription: "A chicken stuffed with garlic butter",
    recipeDifficultyRating: 2,
  },
];

router.route("/").get(async (request, result) => {
  //const recipes = getAllRecipes();
  const allRecipes = await prisma.recipe.findMany();
  result.json(allRecipes);
});

export default router;
