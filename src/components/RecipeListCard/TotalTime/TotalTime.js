import { Chip, Tooltip } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { minutesToHours } from "../../../utils";
import PropTypes from "prop-types";

export const TotalTime = (props) => {
	const cookTime = props.cookTime;
	const prepTime = props.prepTime;
	const totalTime = cookTime + prepTime;
	const formattedTime = minutesToHours(totalTime);

	const timeBreakdown =
		"Prep: " +
		minutesToHours(prepTime) +
		" & Cook: " +
		minutesToHours(cookTime);

	return (
		<Tooltip title={timeBreakdown}>
			<Chip
				icon={<AccessAlarmIcon />}
				label={formattedTime}
				variant="outlined"
			/>
		</Tooltip>
	);
};

TotalTime.propTypes = {
	cookTime: PropTypes.number,
	prepTime: PropTypes.number,
};