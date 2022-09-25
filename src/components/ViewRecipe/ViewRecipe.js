import { useState } from "react";
import { RecipeImage } from "./RecipeImage/RecipeImage";

export const ViewRecipe = (props) => {
  const recipeID = props.recipeID;

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
