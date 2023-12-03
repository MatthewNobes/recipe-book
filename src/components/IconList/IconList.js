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
				const listItemTheme = item.colour ? { color: item.colour } : {};
				const onClickFn = item.onClickFn
					? item.onClickFn
					: () => navigate(item.route);

				return (
					<Box key={index}>
						<ListItem disablePadding sx={listItemTheme}>
							<ListItemButton onClick={onClickFn}>
								<ListItemIcon sx={{ color: "inherit" }}>
									{item.icon}
								</ListItemIcon>
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
