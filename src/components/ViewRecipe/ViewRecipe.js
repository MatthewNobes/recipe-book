import { useState } from "react";
import { RecipeImage } from "./RecipeImage/RecipeImage";
import { useLocation } from "react-router-dom";

export const ViewRecipe = () => {
  const location = useLocation();
  const recipeID = location.state.recipeID;

  console.log(recipeID);

  // temps
  const recipeName = "Ravioli";
  const imageSource =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg/1200px-Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg";

  const [recipe, setRecipe] = useState({});
  return (
    <>
      <RecipeImage imageSource={imageSource} recipeName={recipeName} />
    </>
  );
};
