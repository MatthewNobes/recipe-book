import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { List } from "@mui/material";
import RecipeListCard from "../../components/RecipeListCard";
import RecipeSpeedDial from "../../components/RecipeSpeedDial";

export const BrowseRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/recipes/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.data));
  }, []);

  console.log(recipes);
  return (
    <div>
      <Header headerText="Recipes" />
      <div>
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
                id={recipe.RecipeID}
                recipeName={recipe.RecipeName}
                recipeDescription={recipe.RecipeDecsription}
                isFavorite={false}
                cookTime={recipe.RecipeCookTime}
                prepTime={recipe.RecipePrepTime}
              />
            </List>
          );
        })}
        <RecipeSpeedDial />
      </div>
    </div>
  );
};
