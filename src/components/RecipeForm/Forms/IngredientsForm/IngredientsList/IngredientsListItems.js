import { Clear } from "@mui/icons-material";
import {
	ListItem,
	Tooltip,
	IconButton,
	ListItemButton,
	ListItemText,
	Chip,
} from "@mui/material";
import PropTypes from "prop-types";
import { getMeasurementsThatNeedASpace } from "utils";

export const IngredientsListItems = ({
	ingredientsArray,
	removeIngredient,
}) => {
	const measurementsThatNeedASpace = getMeasurementsThatNeedASpace();
	return (
		<>
			{ingredientsArray.map((ingredient, index) => {
				let measurement = measurementsThatNeedASpace.includes(
					ingredient.measurement,
				)
					? " " + ingredient.measurement
					: ingredient.measurement;
				return (
					<ListItem
						key={index}
						secondaryAction={
							<Tooltip title={"Remove ingredient"} placement={"left"}>
								<IconButton
									edge="end"
									aria-label="remove ingredient"
									onClick={() => removeIngredient(index)}
								>
									<Clear />
								</IconButton>
							</Tooltip>
						}
						disablePadding
					>
						<ListItemButton role={undefined} dense>
							<ListItemText
								id={ingredient.name}
								primary={ingredient.name}
								secondary={ingredient.quantity + measurement}
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
