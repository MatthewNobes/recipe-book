import { Chip, Tooltip } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { minutesToHours } from "../../../../utils";
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

	if (totalTime > 0) {
		return (
			<Tooltip title={timeBreakdown}>
				<Chip
					icon={<AccessAlarmIcon />}
					label={formattedTime}
					variant="outlined"
				/>
			</Tooltip>
		);
	} else {
		return <div data-testid={"no-prep-or-cook-required"} />;
	}
};

TotalTime.propTypes = {
	cookTime: PropTypes.number,
	prepTime: PropTypes.number,
};
