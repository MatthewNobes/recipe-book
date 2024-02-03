import { Chip, Tooltip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { minutesToHours } from "utils";
import PropTypes from "prop-types";

export const RecipeChip = ({ value = 0, label = "" }) => {
	const fullLabel = value === 0 ? label + "N/A" : label + minutesToHours(value);
	return (
		<Tooltip title={label + value}>
			<Chip icon={<AccessTimeIcon />} label={fullLabel} color="primary" />
		</Tooltip>
	);
};

RecipeChip.propTypes = {
	value: PropTypes.number,
	label: PropTypes.string,
};
