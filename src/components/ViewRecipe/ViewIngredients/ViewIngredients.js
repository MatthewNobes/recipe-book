import {
	Box,
	List,
	ListItem,
	Typography,
	Divider,
	ListItemText,
	Tooltip,
} from "@mui/material";

const Header = () => <Typography variant="h4">Ingredients</Typography>;

export const ViewIngredients = ({ ingredients = [] }) => {
	const hasIngredients = ingredients.length === 0 ? false : true;

	if (hasIngredients === true) {
		return (
			<Box sx={{ width: "100%", bgcolor: "background.paper" }}>
				<Header />
				<List>
					{ingredients.map((ingredient) => {
						const recipeIngredientID = ingredient.recipeIngredientID;
						const ingredientName =
							ingredient.ingredientMeasurements.Ingredients.ingredientName;
						const ingredientDescription =
							ingredient.ingredientMeasurements.Ingredients
								.ingredientDescription;
						const quantity = ingredient.ingredientMeasurements.measurementSize;
						const measurementUnit =
							ingredient.ingredientMeasurements.measurementType.measurementType;
						return (
							<Box key={recipeIngredientID}>
								<Tooltip title={ingredientDescription}>
									<ListItem disablePadding>
										<ListItemText variant="body1">
											{quantity} {measurementUnit} {ingredientName}
										</ListItemText>
									</ListItem>
								</Tooltip>
								<Divider />
							</Box>
						);
					})}
				</List>
			</Box>
		);
	} else {
		return (
			<Box>
				<Header />
				<Typography variant="body1">
					No ingredients exists for this recipe
				</Typography>
			</Box>
		);
	}
};
