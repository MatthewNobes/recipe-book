import { SubPageHeader, Page, Loading } from "components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRecipeByID } from "data";
import InteractiveRecipeInstructions from "./InteractiveRecipeInstructions";

export const PlayRecipe = () => {
	const { recipeID } = useParams();

	const [recipe, setRecipe] = useState();

	useEffect(() => {
		const fetchRecipe = async () => {
			setRecipe(await getRecipeByID(recipeID));
		};
		fetchRecipe();
	}, [recipeID]);

	if (recipe) {
		return (
			<>
				<SubPageHeader headerText={recipe.name} />
				<Page>
					<InteractiveRecipeInstructions recipe={recipe} />
				</Page>
			</>
		);
	} else {
		return (
			<>
				<SubPageHeader />
				<Page>
					<Loading />
				</Page>
			</>
		);
	}
};
