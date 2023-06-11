import { Chip, Box } from "@mui/material";
import PropTypes from "prop-types";

export const NotesBlock = ({ notes, removeNote }) => {
	if (notes.length > 0) {
		return (
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1,
				}}
			>
				{notes.map((note, index) => {
					return (
						<Chip
							key={index}
							label={note}
							onDelete={() => {
								removeNote(index);
							}}
						/>
					);
				})}
			</Box>
		);
	}
};

NotesBlock.propTypes = {
	notes: PropTypes.array,
	removeNote: PropTypes.func,
};
