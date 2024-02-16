import { Chip, Tooltip } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { minutesToHours } from "utils";
import PropTypes from "prop-types";

export const RecipeChip = ({ value = 0, label = "", toolTipText = "" }) => {
	if (value) {
		return (
			<Tooltip title={toolTipText}>
				<Chip
					icon={<AccessTime />}
					label={label + minutesToHours(value)}
					color="primary"
				/>
			</Tooltip>
		);
	}
};

RecipeChip.propTypes = {
	value: PropTypes.number,
	label: PropTypes.string,
	toolTipText: PropTypes.string,
};
