import { ViewIngredients } from "./ViewIngredients/ViewIngredients";
import { ViewMethod } from "./ViewMethod/ViewMethod";
import { RecipeFooter } from "./RecipeFooter/RecipeFooter";
import PropTypes from "prop-types";
import { ViewExtras } from "./ViewExtras/ViewExtras";

export const ViewDetails = ({
	ingredients = [],
	method = [],
	recipeSource,
	notes,
	createdDate,
}) => {
	return (
		<>
			<ViewIngredients ingredients={ingredients} />
			<ViewMethod method={method} />
			<ViewExtras notes={notes} />
			<RecipeFooter recipeSource={recipeSource} createdDate={createdDate} />
		</>
	);
};

ViewDetails.propTypes = {
	ingredients: PropTypes.array,
	method: PropTypes.array,
	recipeSource: PropTypes.string,
	notes: PropTypes.array,
	createdDate: PropTypes.object,
};
