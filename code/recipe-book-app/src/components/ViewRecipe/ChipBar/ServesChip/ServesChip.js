import { Chip, Tooltip } from "@mui/material";
import { Restaurant } from "@mui/icons-material";
import PropTypes from "prop-types";

export const ServesChip = ({ servesNumber = "?" }) => {
	return (
		<Tooltip title={"Serves " + servesNumber}>
			<Chip
				icon={<Restaurant />}
				label={"Serves " + servesNumber}
				variant="outlined"
				color="primary"
			/>
		</Tooltip>
	);
};

ServesChip.propTypes = {
	servesNumber: PropTypes.string,
};
