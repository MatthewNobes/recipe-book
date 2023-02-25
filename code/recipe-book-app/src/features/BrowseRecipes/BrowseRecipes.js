import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { List } from "@mui/material";
import RecipeListCard from "../../components/RecipeListCard";

export const BrowseRecipes = () => {
	const [recipes, setRecipes] = useState([]);

	const navigate = useNavigate();

	const navigateToNewRecipe = useCallback(
		() => navigate("/addRecipe", { replace: false }),
		[navigate],
	);

	const menuOptions = [
		{
			label: "New recipe",
			onClickFunction: () => {
				navigateToNewRecipe();
			},
		},
		{
			label: "Edit recipe",
			onClickFunction: () => {
				console.log("This option will come later");
			},
		},
	];

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + "/recipes/recipes")
			.then((response) => response.json())
			.then((data) => setRecipes(data.data));
	}, []);

	console.log(recipes);
	return (
		<div>
			<Header headerText="Browse Recipes" menuOptions={menuOptions} />
			<div>
				<List
					sx={{
						width: "100%",
						minWidth: 360,
						bgcolor: "background.paper",
					}}
				>
					{recipes.map((recipe) => {
						return (
							<RecipeListCard
								key={recipe.recipeID}
								id={recipe.recipeID}
								recipeName={recipe.recipeName}
								recipeDescription={recipe.recipeDescription}
								isFavorite={false}
								cookTime={recipe.recipeCookTime}
								prepTime={recipe.recipePrepTime}
							/>
						);
					})}
				</List>
			</div>
		</div>
	);
};
