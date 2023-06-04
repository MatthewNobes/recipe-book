import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading, RecipeList, Page, Header } from "../../components";
import { getRecipesByCategoryName } from "../../data";

export const Category = () => {
	const { category } = useParams();

	const [recipes, setRecipes] = useState();

	useEffect(() => {
		const fetchRecipe = async () => {
			setRecipes(await getRecipesByCategoryName(category));
		};
		fetchRecipe();
	}, [category]);

	if (recipes) {
		return (
			<>
				<Header headerText={category} />
				<Page>
					<RecipeList recipes={recipes} />
				</Page>
			</>
		);
	} else {
		return (
			<>
				<Header headerText={category} />
				<Loading />
			</>
		);
	}
};
