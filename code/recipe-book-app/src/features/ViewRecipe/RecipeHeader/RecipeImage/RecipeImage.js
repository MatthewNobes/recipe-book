import css from "./RecipeImage.module.css";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

export const RecipeImage = (props) => {
	const imageSource = props.imageSource;
	const recipeName = props.recipeName;
	return (
		<Box sx={{ backgroundColor: "background.paper", maxWidth: "100%" }}>
			<img className={css.RecipeImage} alt={recipeName} src={imageSource} />
		</Box>
	);
};

RecipeImage.propTypes = {
	imageSource: PropTypes.string,
	recipeName: PropTypes.string,
};
