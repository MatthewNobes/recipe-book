import { Box } from "@mui/material";
import { ServesChip } from "./ServesChip/ServesChip";
import { DifficultyChip } from "./DifficultyChip/DifficultyChip";
import { RecipeChip } from "./RecipeChip/RecipeChip";
import { CountryChip } from "./CountryChip/CountryChip";
import { VegStatusChip } from "./VegStatusChip/VegStatusChip";
import PropTypes from "prop-types";

export const ChipBar = ({
	servesNumber,
	difficultyRating,
	cookTime,
	prepTime,
	country,
	vegStatus,
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				flexWrap: "wrap",
			}}
		>
			<Box
				sx={{
					display: "flex",
					gap: "10px",
					mt: 1,
					mr: 1,
					flexWrap: "wrap",
				}}
			>
				<ServesChip servesNumber={servesNumber} />
				<CountryChip country={country} />
				<DifficultyChip difficultyRating={difficultyRating} />
				<VegStatusChip vegStatus={vegStatus} />
			</Box>

			<Box
				sx={{
					display: "flex",
					gap: "10px",
					mt: 1,
					mb: 1,
					flexWrap: "wrap",
				}}
			>
				<RecipeChip label="Prep: " value={prepTime} />
				<RecipeChip label="Cook: " value={cookTime} />
			</Box>
		</Box>
	);
};

ChipBar.propTypes = {
	difficultyRating: PropTypes.number,
	servesNumber: PropTypes.number,
	cookTime: PropTypes.number,
	prepTime: PropTypes.number,
	country: PropTypes.string,
	vegStatus: PropTypes.string,
};
