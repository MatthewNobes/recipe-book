import PropTypes from "prop-types";
import NotesForm from "./NotesForm";
import { FormControlLabel, Checkbox, Box } from "@mui/material";

export const AdditionalInfoForm = ({
	setNotes,
	notes,
	canBeFrozen,
	setCanBeFrozen,
}) => {
	return (
		<Box
			sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1 }}
		>
			<FormControlLabel
				control={
					<Checkbox
						value={canBeFrozen}
						onChange={() => setCanBeFrozen(!canBeFrozen)}
					/>
				}
				label="Can it be frozen?"
			/>
			<NotesForm
				notes={notes}
				addNote={(newNote) => setNotes([...notes, newNote])}
				removeNote={(idToRemove) => {
					const updatedNotes = notes;
					updatedNotes.splice(idToRemove, 1);
					setNotes([...updatedNotes]);
				}}
			/>
		</Box>
	);
};

AdditionalInfoForm.propTypes = {
	setNotes: PropTypes.func,
	notes: PropTypes.array,
	canBeFrozen: PropTypes.bool,
	setCanBeFrozen: PropTypes.func,
};
