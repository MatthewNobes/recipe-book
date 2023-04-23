//import { ViewIngredients } from "./ViewIngredients/ViewIngredients";
//import { ViewMethod } from "./ViewMethod/ViewMethod";
import { RecipeFooter } from "./RecipeFooter/RecipeFooter";
import PropTypes from "prop-types";

export const ViewDetails = ({
	//ingredients = [],
	//method = [],
	recipeSource,
}) => {
	return (
		<>
			<RecipeFooter recipeSource={recipeSource} />
		</>
	);
};

ViewDetails.propTypes = {
	ingredients: PropTypes.array,
	method: PropTypes.array,
	recipeSource: PropTypes.string,
};
