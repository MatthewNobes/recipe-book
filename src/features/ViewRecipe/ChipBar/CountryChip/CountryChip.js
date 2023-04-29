import { Tooltip, Chip } from "@mui/material";
import { Flag } from "@mui/icons-material";
import PropTypes from "prop-types";

export const CountryChip = ({ country }) => {
	if (country) {
		return (
			<Tooltip
				title={
					"Please view the info page for more details on difficult ratings"
				}
			>
				<Chip
					icon={<Flag />}
					label={country}
					variant="outlined"
					color="primary"
					onClick={() =>
						console.log(
							"will eventually redirect to filter list of other recipes from that country",
						)
					}
				/>
			</Tooltip>
		);
	}
};

CountryChip.propTypes = {
	country: PropTypes.string,
};
