import { useEffect, useState } from "react";
import Header from "../../components/Header";

export const BrowseRecipes = () => {
  const holder = true;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4444/api/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, [holder]);

  return (
    <div>
      <Header headerText="Recipes" />
      <p>Home in development</p>
      {recipes.map((recipe) => {
        return (
          <div>
            <p>{recipe.recipeName}</p>
          </div>
        );
      })}
    </div>
  );
};
