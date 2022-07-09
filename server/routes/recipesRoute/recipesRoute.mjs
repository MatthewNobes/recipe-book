"use strict";
import express from "express";
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

router.route("/").get((request, result) => {
  result.json(testRecipes);
});

export default router;
