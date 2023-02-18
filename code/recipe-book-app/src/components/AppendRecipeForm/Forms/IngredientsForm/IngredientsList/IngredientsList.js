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
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

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

IngredientsListItems.propTypes = {
	ingredientsArray: PropTypes.array,
	units: PropTypes.array,
	removeIngredient: PropTypes.func,
};

IngredientsList.propTypes = {
	ingredientsArray: PropTypes.array,
	addIngredient: PropTypes.func,
	removeIngredient: PropTypes.func,
};

export const IngredientsList = (props) => {
	const ingredientsArray = props.ingredientsArray;
	const removeIngredient = props.removeIngredient;

	const [units, setUnits] = useState([]);

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + "/measurementTypes/measurementTypes")
			.then((response) => response.json())
			.then((data) => {
				setUnits(
					data.data.map((measurementType) => {
						return {
							id: measurementType.measurementTypeID,
							label: measurementType.measurementType,
						};
					}),
				);
			});
	}, []);

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
