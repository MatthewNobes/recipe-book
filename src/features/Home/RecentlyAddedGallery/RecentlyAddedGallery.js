import PropTypes from "prop-types";
import { RecipeSlideshow } from "components";
import { Typography, Box } from "@mui/material";

export const RecentlyAddedGallery = ({ recipes }) => {
	return (
		<Box sx={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
			<Typography sx={{ px: 1 }} variant="h4">
				Recently added
			</Typography>
			<Box>
				<RecipeSlideshow recipes={recipes.slice(-6)} />
			</Box>
		</Box>
	);
};

RecentlyAddedGallery.propTypes = {
	recipes: PropTypes.array,
};
