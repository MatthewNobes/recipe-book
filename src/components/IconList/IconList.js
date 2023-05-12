import {
	List,
	Box,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const IconList = ({ options }) => {
	const navigate = useNavigate();

	// This will eventually be populated from state of the current user
	const isAdmin = true;

	return (
		<List>
			{options.map((item, index) => {
				if (item.label === "Admin" && isAdmin === false) {
					return <></>;
				} else {
					return (
						<Box key={index}>
							<ListItem disablePadding>
								<ListItemButton onClick={() => navigate(item.route)}>
									<ListItemIcon>{item.icon}</ListItemIcon>
									<ListItemText primary={item.label} />
								</ListItemButton>
							</ListItem>
						</Box>
					);
				}
			})}
		</List>
	);
};

IconList.propTypes = {
	options: PropTypes.array,
};
