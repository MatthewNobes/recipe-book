import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	IconButton,
	Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddIngredient } from "./AddIngredient";

const IngredientsListItems = (props) => {
	const ingredientsArray = props.ingredientsArray;
	const units = props.units;

	const removeIngredient = (ingredientID) => {
		props.removeIngredient(ingredientID);
	};

	return (
		<>
			{ingredientsArray.map((ingredient, index) => {
				return (
					<ListItem
						key={index}
						secondaryAction={
							<IconButton
								edge="end"
								aria-label="delete ingredient"
								onClick={() => removeIngredient(index)}
							>
								<DeleteIcon />
							</IconButton>
						}
						disablePadding
					>
						<ListItemButton role={undefined} dense>
							<ListItemText
								id={ingredient.ingredient}
								primary={ingredient.ingredient}
								secondary={
									ingredient.quantity +
									" " +
									units[ingredient.measurement].label
								}
							/>
						</ListItemButton>
					</ListItem>
				);
			})}
		</>
	);
};

export const IngredientsList = (props) => {
	const ingredientsArray = props.ingredientsArray;
	const removeIngredient = props.removeIngredient;

	const units = [
		{ id: 1, label: "kg" },
		{ id: 2, label: "g" },
		{ id: 3, label: "teaspoons" },
		{ id: 4, label: "tablespoons" },
	];

	return (
		<>
			<List sx={{ width: "100%", bgcolor: "background.paper" }}>
				{ingredientsArray.length === 0 ? (
					<Typography>No ingredient</Typography>
				) : (
					<IngredientsListItems
						removeIngredient={removeIngredient}
						ingredientsArray={ingredientsArray}
						units={units}
					/>
				)}
				<ListItem>
					<AddIngredient addIngredient={props.addIngredient} units={units} />
				</ListItem>
			</List>
		</>
	);
};
