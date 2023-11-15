import {
	List,
	Box,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
} from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const IconList = ({ options, listSubheader }) => {
	const navigate = useNavigate();

	return (
		<List
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					{listSubheader}
				</ListSubheader>
			}
		>
			{options.map((item, index) => {
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
			})}
		</List>
	);
};

IconList.propTypes = {
	options: PropTypes.array,
	listSubheader: PropTypes.string,
};
