import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
	AddRecipeButton,
	Loading,
	RecipeList,
	Page,
	Header,
	ImageGallery,
} from "components";
import { getRecipesByCategoryName } from "data";

export const Category = () => {
	const { category } = useParams();

	const [recipes, setRecipes] = useState();

	useEffect(() => {
		const fetchRecipe = async () => {
			const foundRecipes = await getRecipesByCategoryName(category);
			setRecipes(foundRecipes.data);
		};
		fetchRecipe();
	}, [category]);

	if (recipes) {
		return (
			<>
				<Header headerText={category} />
				<Page>
					<ImageGallery
						recipes={recipes}
						howManyToDisplay={4}
						haveAlternatingLargeImage={false}
					/>
					<RecipeList recipes={recipes} />
					<AddRecipeButton />
				</Page>
			</>
		);
	} else {
		return (
			<>
				<Header headerText={category} />
				<Loading />
				<AddRecipeButton />
			</>
		);
	}
};
