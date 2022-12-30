import { ViewIngredients } from "./ViewIngredients/ViewIngredients";
import { ViewMethod } from "./ViewMethod/ViewMethod";
import { RecipeFooter } from "./RecipeFooter/RecipeFooter";

export const ViewDetails = ({
	ingredients = [],
	method = [],
	recipeSource,
}) => {
	return (
		<>
			<ViewIngredients ingredients={ingredients} />
			<ViewMethod method={method} />
			<RecipeFooter recipeSource={recipeSource} />
		</>
	);
};
