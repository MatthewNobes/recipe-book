import css from "./RecipeImage.module.css";
import { Box } from "@mui/material";

export const RecipeImage = (props) => {
	const imageSource = props.imageSource;
	const recipeName = props.recipeName;
	return (
		<Box sx={{ backgroundColor: "background.paper", maxWidth: "100%" }}>
			<img className={css.RecipeImage} alt={recipeName} src={imageSource} />
		</Box>
	);
};