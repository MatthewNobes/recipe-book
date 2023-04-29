import { Chip, Tooltip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { minutesToHours } from "../../../../utils";
import PropTypes from "prop-types";

export const RecipeChip = ({ value = 0, label = "" }) => {
	const valueToDisplay = value === 0 ? "0:00" : minutesToHours(value);
	return (
		<Tooltip title={label + value}>
			<Chip
				icon={<AccessTimeIcon />}
				label={label + valueToDisplay}
				color="warning"
				variant="outlined"
			/>
		</Tooltip>
	);
};

RecipeChip.propTypes = {
	value: PropTypes.number,
	label: PropTypes.string,
};
