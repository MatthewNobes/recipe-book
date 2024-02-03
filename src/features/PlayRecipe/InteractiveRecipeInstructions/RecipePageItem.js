import { FinishedPage, StepPage, IngredientPage, TitlePage } from "./Pages";
import PropTypes from "prop-types";

export const RecipePageItem = ({
	pageProperties,
	showPage,
	nextFunction,
	backFunction,
}) => {
	const style = { display: showPage ? "block" : "none" };

	if (pageProperties.type === "title") {
		const { name, image, cookTime, prepTime } = pageProperties.contents;
		return (
			<TitlePage
				style={style}
				name={name}
				image={image}
				cookTime={cookTime}
				prepTime={prepTime}
				nextFunction={nextFunction}
			/>
		);
	} else if (pageProperties.type === "ingredient") {
		const ingredients = pageProperties.contents;

		return (
			<IngredientPage
				backFunction={backFunction}
				ingredients={ingredients}
				style={style}
				nextFunction={nextFunction}
			/>
		);
	} else if (pageProperties.type === "step") {
		const { step, number } = pageProperties.contents;

		return (
			<StepPage
				backFunction={backFunction}
				step={step}
				number={number}
				style={style}
				nextFunction={nextFunction}
			/>
		);
	} else if (pageProperties.type === "finished") {
		return (
			<FinishedPage
				backFunction={backFunction}
				returnAddress={pageProperties.contents.returnAddress}
				style={style}
			/>
		);
	}
};

RecipePageItem.propTypes = {
	pageProperties: PropTypes.object,
	showPage: PropTypes.bool,
	nextFunction: PropTypes.func,
	backFunction: PropTypes.func,
};
