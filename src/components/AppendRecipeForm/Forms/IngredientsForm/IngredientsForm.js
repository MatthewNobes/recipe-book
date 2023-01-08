import { Box } from "@mui/material";
import { IngredientsList } from "./IngredientsList/IngredientsList";

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
