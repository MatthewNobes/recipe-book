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
								secondary={ingredient.quantity + " " + ingredient.measurement}
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
