import { RecipeForm, SubPageHeader, Loading } from "../../components";
import { getRecipeByID } from "../../data";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const EditRecipe = () => {
	const { recipeID } = useParams();
	// look up the recipe values for the recipeID passed in
	const [recipeValues, setRecipeValues] = useState(null);

	useEffect(() => {
		const getValues = async () => {
			const currentValues = await getRecipeByID(recipeID);
			const jsonIngredients = currentValues.ingredients.map((ingredient) => {
				return JSON.parse(ingredient);
			});
			currentValues.ingredients = jsonIngredients;
			setRecipeValues(currentValues);
		};
		getValues();
	}, []);

	if (recipeValues) {
		return (
			<>
				<SubPageHeader headerText="Edit Recipe" />
				<RecipeForm valuesToEdit={recipeValues} idToEdit={recipeID} />
			</>
		);
	} else {
		return <Loading />;
	}
};

EditRecipe.propTypes = {
	recipeID: PropTypes.number,
};
