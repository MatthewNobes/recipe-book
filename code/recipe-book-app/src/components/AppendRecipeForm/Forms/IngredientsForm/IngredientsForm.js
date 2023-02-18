import { Box } from "@mui/material";
import { IngredientsList } from "./IngredientsList/IngredientsList";
import PropTypes from "prop-types";

export const IngredientsForm = ({ setIngredients, ingredientsArray }) => {
	const removeIngredient = (idToRemove) => {
		const updatedIngredientsArray = ingredientsArray;
		updatedIngredientsArray.splice(idToRemove, 1);
		setIngredients([...updatedIngredientsArray]);
	};

	const addIngredient = (ingredientObject) => {
		setIngredients([...ingredientsArray, ingredientObject]);
	};

	return (
		<Box>
			<IngredientsList
				ingredientsArray={ingredientsArray}
				removeIngredient={removeIngredient}
				addIngredient={addIngredient}
			/>
		</Box>
	);
};

IngredientsForm.propTypes = {
	setIngredients: PropTypes.func,
	ingredientsArray: PropTypes.array,
};
