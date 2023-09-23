import { List, ListItem, Typography } from "@mui/material";
import { AddIngredient } from "./AddIngredient";
import PropTypes from "prop-types";
import { IngredientsListItems } from "./IngredientsListItems";

export const IngredientsList = (props) => {
	const ingredientsArray = props.ingredientsArray;
	const removeIngredient = props.removeIngredient;

	return (
		<>
			<List sx={{ width: "100%", bgcolor: "background.paper" }}>
				{ingredientsArray.length === 0 ? (
					<Typography>No ingredient</Typography>
				) : (
					<IngredientsListItems
						removeIngredient={removeIngredient}
						ingredientsArray={ingredientsArray}
					/>
				)}
				<ListItem>
					<AddIngredient addIngredient={props.addIngredient} />
				</ListItem>
			</List>
		</>
	);
};

IngredientsList.propTypes = {
	ingredientsArray: PropTypes.array,
	addIngredient: PropTypes.func,
	removeIngredient: PropTypes.func,
};
