import { Tooltip, Chip } from "@mui/material";
import { Hardware } from "@mui/icons-material";
import { getDifficultyColour } from "utils";
import PropTypes from "prop-types";

export const DifficultyChip = ({ difficultyRating = 0 }) => {
	if (difficultyRating !== 0) {
		const difficultyColour = getDifficultyColour(difficultyRating);
		return (
			<Tooltip
				title={
					"Please view the info page for more details on difficult ratings"
				}
			>
				<Chip
					icon={<Hardware />}
					label={"Difficulty: " + difficultyRating}
					color={difficultyColour}
					variant="outlined"
				/>
			</Tooltip>
		);
	} else {
		return <div data-testid="empty-rating"></div>;
	}
};

DifficultyChip.propTypes = {
	difficultyRating: PropTypes.number,
};
