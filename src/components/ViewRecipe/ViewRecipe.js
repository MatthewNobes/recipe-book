import { useState, useEffect } from "react";
import { RecipeImage } from "./RecipeImage/RecipeImage";
import { useLocation } from "react-router-dom";
import { Box, Typography, Rating } from "@mui/material";
import { Divider } from "@mui/material";
import { ViewMethod } from "./ViewMethod/ViewMethod";
import { ViewIngredients } from "./ViewIngredients/ViewIngredients";

const method = [
  {
    stepID: 1,
    stepText:
      "Mix the maple syrup, mustard, vinegar and ground cloves or five-spice in a jug. Pour half over the fat, roast for 15 mins, then pour over the rest and return to the oven for another 30 mins.",
    stepNumber: 1,
  },
  {
    stepID: 2,
    stepText:
      "Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to two days ahead and served cold.",
    stepNumber: 2,
  },
  {
    stepID: 3,
    stepText: "Boil an egg",
    stepNumber: 3,
  },
  {
    stepID: 4,
    stepText: "Accelerate to 88mph",
    stepNumber: 4,
  },
  {
    stepID: 5,
    stepText:
      "Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to two days ahead and served cold.",
    stepNumber: 5,
  },
  {
    stepID: 6,
    stepText: "Do something else",
    stepNumber: 6,
  },
];

const ingredients = [
  {
    recipeIngredientID: 1,
    ingredient: "Egg",
    ingredientDescription: "A chickens egg",
    ingredientInfoURL: "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEgg",
    quantity: 2,
    measurement: "Whole",
  },
  {
    recipeIngredientID: 45,
    ingredient: "Milk",
    ingredientDescription: "A chickens egg",
    ingredientInfoURL: "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEgg",
    quantity: 1,
    measurement: "Liter",
  },
  {
    recipeIngredientID: 17,
    ingredient: "Sugar",
    ingredientDescription: "A chickens egg",
    ingredientInfoURL: "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEgg",
    quantity: 200,
    measurement: "Grams",
  },
  {
    recipeIngredientID: 18,
    ingredient: "Baking soda",
    ingredientDescription: "A chickens egg",
    ingredientInfoURL: "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEgg",
    quantity: 2,
    measurement: "Teaspoons",
  },
];

export const ViewRecipe = () => {
  const location = useLocation();
  const recipeID = location.state.recipeID;
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/recipes/recipe/" + recipeID)
      .then((response) => response.json())
      .then((data) => setRecipe(data.data));
  }, []);

  console.log(recipe);

  const recipeName = recipe.RecipeName;
  const recipeDescription = recipe.RecipeDecsription;
  const difficultyRating = recipe.RecipeDifficultyRating;
  const imageSource =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg/1200px-Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg";

  return (
    <>
      <RecipeImage imageSource={imageSource} recipeName={recipeName} />
      <Box sx={{ paddingX: 1 }}>
        <Box sx={{ paddingBottom: 3 }}>
          <Typography variant="h2">{recipeName}</Typography>
          <Rating name="difficulty rating" value={difficultyRating} max={10} />
          <Typography variant="body1">{recipeDescription}</Typography>
        </Box>
        <Divider />
        <Box sx={{ paddingBottom: 3 }}>
          <ViewMethod method={method} />
          <ViewIngredients ingredients={ingredients} />
        </Box>
      </Box>
    </>
  );
};
