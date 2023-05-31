import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Page } from "../../components";
import { RecipeList } from "../../components/RecipeList/RecipeList";
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
			</Page>
		</>
	);
};
