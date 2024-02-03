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
				<img
					style={{
						height: "40vh",
						minWidth: "60%",
						objectFit: "cover",
						display: "block",
						marginLeft: "auto",
						marginRight: "auto",
					}}
					alt={recipeName}
					src={`${source}?webp=true`}
					srcSet={`${source}?webp=true`}
				/>
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
