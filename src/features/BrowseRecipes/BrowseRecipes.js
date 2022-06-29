import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { List } from "@mui/material";
import RecipeListCard from "../../components/RecipeListCard";

export const BrowseRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4444/api/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <Header headerText="Recipes" />
      {recipes.map((recipe) => {
        return (
          <List
            sx={{ width: "100%", minWidth: 360, bgcolor: "background.paper" }}
          >
            <RecipeListCard
              id={5}
              recipeName={recipe.recipeName}
              recipeDescription={recipe.recipeDescription}
              isFavorite={false}
              totalTime={"1:10"}
            />
          </List>
        );
      })}
    </div>
  );
};
