import {
	ListItem,
	IconButton,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

export const Image = ({ image, index, removeImage }) => {
	return (
		<ListItem
			key={index}
			secondaryAction={
				<IconButton
					edge="end"
					aria-label="delete image"
					onClick={() => removeImage(index)}
				>
					<DeleteIcon />
				</IconButton>
			}
			disablePadding
		>
			<ListItemButton role={undefined} dense>
				<ListItemText
					id={index}
					primary={"Image " + (index + 1)}
					secondary={image.imageSource}
				/>
			</ListItemButton>
		</ListItem>
	);
};

Image.propTypes = {
	image: PropTypes.object,
	index: PropTypes.number,
	removeImage: PropTypes.func,
};
