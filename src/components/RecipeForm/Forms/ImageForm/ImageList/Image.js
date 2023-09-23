import {
	ListItem,
	IconButton,
	ListItemButton,
	ListItemText,
	Tooltip,
} from "@mui/material";
import { Clear } from "@mui/icons-material";
import PropTypes from "prop-types";

export const Image = ({ image, index, removeImage }) => {
	return (
		<ListItem
			key={index}
			secondaryAction={
				<Tooltip title={"remove image"} placement={"left"}>
					<IconButton
						edge="end"
						aria-label="remove image"
						onClick={() => removeImage(index)}
					>
						<Clear />
					</IconButton>
				</Tooltip>
			}
			disablePadding
		>
			<ListItemButton role={undefined} dense>
				<ListItemText
					id={index}
					primary={"Image " + (index + 1)}
					secondary={image}
				/>
			</ListItemButton>
		</ListItem>
	);
};

Image.propTypes = {
	image: PropTypes.string,
	index: PropTypes.number,
	removeImage: PropTypes.func,
};
