import {
	ListItem,
	List,
	ListItemText,
	IconButton,
	Tooltip,
} from "@mui/material";
import { Clear } from "@mui/icons-material";
import PropTypes from "prop-types";

export const NotesList = ({ notes, removeNote }) => {
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
								<Tooltip title="Remove note" placement="left">
									<IconButton
										edge="end"
										aria-label="delete"
										onClick={() => removeNote(index)}
									>
										<Clear />
									</IconButton>
								</Tooltip>
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

NotesList.propTypes = {
	notes: PropTypes.array,
	removeNote: PropTypes.func,
};
