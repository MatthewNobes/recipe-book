import { Chip, Tooltip } from "@mui/material";
import { RamenDining } from "@mui/icons-material";
import PropTypes from "prop-types";

export const VegStatusChip = ({ vegStatus }) => {
	if (vegStatus === "Vegan" || vegStatus === "Vegetarian") {
		return (
			<Tooltip title={"This recipe is " + vegStatus}>
				<Chip
					icon={<RamenDining />}
					label={vegStatus}
					variant="outlined"
					color="success"
				/>
			</Tooltip>
		);
	} else {
		return <div data-testid="notVeg" />;
	}
};

VegStatusChip.propTypes = {
	vegStatus: PropTypes.string,
};
