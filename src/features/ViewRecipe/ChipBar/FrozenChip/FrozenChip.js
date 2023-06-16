import { Chip, Tooltip } from "@mui/material";
import { AcUnit } from "@mui/icons-material";
import PropTypes from "prop-types";

export const FrozenChip = ({ canBeFrozen }) => {
	if (canBeFrozen) {
		return (
			<Tooltip title={"This recipe can be frozen"}>
				<Chip
					icon={<AcUnit />}
					label={"Freezable"}
					variant="outlined"
					color="info"
				/>
			</Tooltip>
		);
	} else {
		return <div data-testid="notFreezable" />;
	}
};

FrozenChip.propTypes = {
	canBeFrozen: PropTypes.bool,
};
