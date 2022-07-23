import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { List } from "@mui/material";
import RecipeListCard from "../../components/RecipeListCard";
import RecipeSpeedDial from "../../components/RecipeSpeedDial";

export const BrowseRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  console.log(recipes);
  return (
    <div>
      <Header headerText="Recipes" />
      <div className="pageContents"></div>
      {recipes.map((recipe) => {
        return (
          <List
            sx={{
              width: "100%",
              minWidth: 360,
              bgcolor: "background.paper",
              top: "72px",
            }}
          >
            <RecipeListCard
              id={recipe.recipeID}
              recipeName={recipe.recipeName}
              recipeDescription={recipe.recipeDecsription}
              isFavorite={false}
              cookTime={recipe.recipeCookTime}
              prepTime={recipe.recipePrepTime}
            />
          </List>
        );
      })}
      <RecipeSpeedDial />
    </div>
  );
};
