import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AddRecipeButton, Header, Page, RecipeList } from "components";
import { getAllRecipes } from "data";

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
		() => navigate("/add", { replace: false }),
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
		<>
			<Header headerText="Browse Recipes" menuOptions={menuOptions} />
			<Page>
				<RecipeList recipes={recipes} />
				<AddRecipeButton />
			</Page>
		</>
	);
};
