import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Header, RecipeListCard } from "../../components";
import { List } from "@mui/material";
import { getAllRecipes } from "../../data";

export const BrowseRecipes = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			setRecipes(await getAllRecipes());
		};
		fetchRecipes();
	}, []);

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
								key={recipe.id}
								id={recipe.id}
								recipeName={recipe.name}
								recipeDescription={recipe.description}
								isFavorite={false}
								cookTime={recipe.cook_time}
								prepTime={recipe.prep_time}
							/>
						);
					})}
				</List>
			</div>
		</div>
	);
};
