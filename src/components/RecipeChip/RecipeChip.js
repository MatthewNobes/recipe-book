import { Chip, Tooltip } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { minutesToHours } from "utils";
import PropTypes from "prop-types";

export const RecipeChip = ({ value = 0, label = "", toolTipText = "" }) => {
	if (value) {
		const fullLabel =
			value === 0 ? label + "N/A" : label + minutesToHours(value);
		return (
			<Tooltip title={toolTipText}>
				<Chip icon={<AccessTime />} label={fullLabel} color="primary" />
			</Tooltip>
		);
	}
};

RecipeChip.propTypes = {
	value: PropTypes.number,
	label: PropTypes.string,
	toolTipText: PropTypes.string,
};
