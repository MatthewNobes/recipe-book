import { InputAdornment, InputLabel, FormControl, Paper } from "@mui/material";
import {
	OutlinedInputWrapper,
	SubmitIconButtonWrapper,
} from "../../../../FormUI";
import * as yup from "yup";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import { Add } from "@mui/icons-material";
import { NotesBlock } from "./NotesBlock";

export const NotesForm = ({ notes, addNote, removeNote }) => {
	const initialValues = { note: "" };

	const validationSchema = yup.object().shape({
		note: yup
			.string()
			.required("Required")
			.max(512, "Must not be greater than 512 characters"),
	});

	const submitHandle = (values) => {
		addNote(values.note);
		values.note = "";
	};

	return (
		<Paper
			component="div"
			sx={{
				display: "flex",
				flexDirection: "column",
				p: 1,
				gap: 1,
			}}
		>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					submitHandle(values);
				}}
				validationSchema={validationSchema}
			>
				<Form component="div">
					<FormControl variant="outlined" sx={{ width: "100%" }}>
						<InputLabel htmlFor="note">New note</InputLabel>
						<OutlinedInputWrapper
							id="note"
							name="note"
							label="New note"
							type="string"
							aria-label="new note"
							endAdornment={
								<InputAdornment position="end">
									<SubmitIconButtonWrapper aria-label="add note" edge="end">
										<Add />
									</SubmitIconButtonWrapper>
								</InputAdornment>
							}
						/>
					</FormControl>
				</Form>
			</Formik>
			<NotesBlock notes={notes} removeNote={removeNote} />
		</Paper>
	);
};

NotesForm.propTypes = {
	notes: PropTypes.array,
	addNote: PropTypes.func,
	removeNote: PropTypes.func,
};
