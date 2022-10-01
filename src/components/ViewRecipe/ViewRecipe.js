import { useState, useEffect } from "react";
import { RecipeImage } from "./RecipeImage/RecipeImage";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Divider } from "@mui/material";

export const ViewRecipe = () => {
  const location = useLocation();
  const recipeID = location.state.recipeID;
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/recipes/recipe/" + recipeID)
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, []);

  console.log(recipe);

  const recipeName = recipe.recipeName;
  const recipeDescription = recipe.recipeDecsription;
  const imageSource =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg/1200px-Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg";

  return (
    <>
      <RecipeImage imageSource={imageSource} recipeName={recipeName} />
      <Box sx={{ paddingX: 1 }}>
        <Box sx={{ paddingBottom: 3 }}>
          <Typography variant="h2">{recipeName}</Typography>
          <Typography variant="body1">{recipeDescription}</Typography>
        </Box>
        <Divider />
        <Box sx={{ paddingBottom: 3 }}>
          <Typography variant="body1">
            the list of instructions will go here
          </Typography>
        </Box>
      </Box>
    </>
  );
};
