import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import PropTypes from "prop-types";

export const GenericListButtonLink = ({ navigateFn, primaryText }) => {
	return (
		<ListItem>
			<ListItemButton onClick={() => navigateFn()}>
				<ListItemText primary={primaryText} />
			</ListItemButton>
		</ListItem>
	);
};

GenericListButtonLink.propTypes = {
	navigateFn: PropTypes.function,
	primaryText: PropTypes.string,
};
