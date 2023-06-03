import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading, RecipeList, Page, Header } from "../../components";
import { getRecipesByCategoryID } from "../../data";

export const Category = () => {
	const { categoryID } = useParams();

	const [recipes, setRecipes] = useState();
	const [categoryName, setCategoryName] = useState();

	useEffect(() => {
		setCategoryName("Desserts");
		const fetchRecipe = async () => {
			setRecipes(await getRecipesByCategoryID(categoryID));
		};
		fetchRecipe();
	}, [categoryID]);

	if (recipes) {
		return (
			<>
				<Header headerText={"Browse " + categoryName} />
				<Page>
					<RecipeList recipes={recipes} />
				</Page>
			</>
		);
	} else {
		return (
			<>
				<Header headerText="Browse Recipes" />
				<Loading />
			</>
		);
	}
};
