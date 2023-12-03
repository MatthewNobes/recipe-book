import PropTypes from "prop-types";
import { List, ListItem, ListItemText } from "@mui/material";

export const ViewUserDetails = ({ userDetails }) => {
	return (
		<List disablePadding>
			<ListItem>
				<ListItemText
					primary={
						"First name: " +
						(userDetails.firstName ? userDetails.firstName : "n/a")
					}
				/>
			</ListItem>
			<ListItem>
				<ListItemText
					primary={
						"Last name: " +
						(userDetails.lastName ? userDetails.lastName : "n/a")
					}
				/>
			</ListItem>
			<ListItem>
				<ListItemText primary={"Email address: " + userDetails.email} />
			</ListItem>
		</List>
	);
};

ViewUserDetails.propTypes = {
	userDetails: PropTypes.object,
};
