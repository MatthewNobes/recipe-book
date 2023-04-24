import { Box } from "@mui/material";
import { ServesChip } from "./ServesChip/ServesChip";
import { DifficultyChip } from "./DifficultyChip/DifficultyChip";
import { RecipeChip } from "./RecipeChip/RecipeChip";
import PropTypes from "prop-types";

export const ChipBar = ({
	servesNumber,
	difficultyRating,
	cookTime,
	prepTime,
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				gap: "10px",
				mt: 1,
				mb: 1,
				flexWrap: "wrap",
			}}
		>
			<ServesChip servesNumber={servesNumber} />
			<DifficultyChip difficultyRating={difficultyRating} />
			<RecipeChip label="Prep: " value={prepTime} />
			<RecipeChip label="Cook: " value={cookTime} />
		</Box>
	);
};

ChipBar.propTypes = {
	difficultyRating: PropTypes.number,
	servesNumber: PropTypes.number,
	cookTime: PropTypes.number,
	prepTime: PropTypes.number,
};
