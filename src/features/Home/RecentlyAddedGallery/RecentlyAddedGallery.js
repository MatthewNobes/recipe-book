import PropTypes from "prop-types";
import { RecipeSlideshow } from "components";
import { Typography, Box } from "@mui/material";

export const RecentlyAddedGallery = ({ recipes }) => {
	const recipesSortedOldestFirst = recipes.sort((a, b) => a.id - b.id);
	return (
		<Box sx={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
			<Typography sx={{ px: 1 }} variant="h4">
				Recently added
			</Typography>
			<RecipeSlideshow recipes={recipesSortedOldestFirst.slice(-6)} />
		</Box>
	);
};

RecentlyAddedGallery.propTypes = {
	recipes: PropTypes.array,
};
