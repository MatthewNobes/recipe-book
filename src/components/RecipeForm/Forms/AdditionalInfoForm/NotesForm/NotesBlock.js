import { ListItem, List, ListItemText, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import PropTypes from "prop-types";

export const NotesBlock = ({ notes, removeNote }) => {
	if (notes) {
		return (
			<List
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1,
				}}
			>
				{notes.map((note, index) => {
					return (
						<ListItem
							key={index}
							secondaryAction={
								<IconButton
									edge="end"
									aria-label="delete"
									onClick={() => removeNote(index)}
								>
									<Delete />
								</IconButton>
							}
						>
							<ListItemText primary={note} />
						</ListItem>
					);
				})}
			</List>
		);
	}
};

NotesBlock.propTypes = {
	notes: PropTypes.array,
	removeNote: PropTypes.func,
};
