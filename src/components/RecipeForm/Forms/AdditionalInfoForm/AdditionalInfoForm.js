import PropTypes from "prop-types";
import NotesForm from "./NotesForm";

export const AdditionalInfoForm = ({ setNotes, notes }) => {
	return (
		<>
			<NotesForm
				notes={notes}
				addNote={(newNote) => setNotes([...notes, newNote])}
				removeNote={(idToRemove) => {
					const updatedNotes = notes;
					updatedNotes.splice(idToRemove, 1);
					setNotes([...updatedNotes]);
				}}
			/>
		</>
	);
};

AdditionalInfoForm.propTypes = {
	setNotes: PropTypes.func,
	notes: PropTypes.array,
};
