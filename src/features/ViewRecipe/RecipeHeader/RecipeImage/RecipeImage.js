import css from "./RecipeImage.module.css";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

export const RecipeImage = (props) => {
	const source = props.imageSource;
	const recipeName = props.recipeName;
	if (source) {
		return (
			<Box
				sx={{
					backgroundColor: "background.paper",
					maxWidth: "100%",
					minHeight: "15em",
				}}
			>
				<img className={css.RecipeImage} alt={recipeName} src={source} />
			</Box>
		);
	} else {
		return (
			<Box
				sx={{
					backgroundColor: "background.paper",
					maxWidth: "100%",
					height: "15em",
				}}
			></Box>
		);
	}
};

RecipeImage.propTypes = {
	imageSource: PropTypes.string,
	recipeName: PropTypes.string,
};
