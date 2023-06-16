import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	IconButton,
	Typography,
	Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddIngredient } from "./AddIngredient";
import PropTypes from "prop-types";

const IngredientsListItems = (props) => {
	const ingredientsArray = props.ingredientsArray;

	const removeIngredient = (ingredientID) => {
		props.removeIngredient(ingredientID);
	};

	console.log(ingredientsArray);

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
								id={ingredient.name}
								primary={ingredient.name}
								secondary={ingredient.quantity + ingredient.measurement}
							/>
							{ingredient.optional ? (
								<Chip
									label="Optional"
									variant="outlined"
									color="info"
									size="small"
								/>
							) : null}
						</ListItemButton>
					</ListItem>
				);
			})}
		</>
	);
};

IngredientsListItems.propTypes = {
	ingredientsArray: PropTypes.array,
	units: PropTypes.array,
	removeIngredient: PropTypes.func,
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

IngredientsList.propTypes = {
	ingredientsArray: PropTypes.array,
	addIngredient: PropTypes.func,
	removeIngredient: PropTypes.func,
};
