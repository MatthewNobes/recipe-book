import { Modal, Typography, Box } from "@mui/material";
import * as yup from "yup";
import { Form, Formik } from "formik";
import {
	TextfieldWrapper,
	SubmitButtonWrapper,
	ResetButtonWrapper,
} from "../../../../../FormUI";
import PropTypes from "prop-types";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "95%",
	maxWidth: 500,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 2,
	textAlign: "center",
	alignItems: "center",
};

const validationSchema = yup.object().shape({
	instruction: yup
		.string()
		.required("Required")
		.max(682, "Must not be greater than 682 characters"),
});

const initialValues = {
	instruction: "",
};

export const MethodModal = (props) => {
	const operation = props.operation;
	const handleClose = () => props.setModalOpenStatus(false);

	const submitHandle = (values) => {
		props.addInstruction({
			instruction: values.instruction,
		});

		handleClose();
	};

	return (
		<Modal
			open={props.modalOpenStatus}
			onClose={handleClose}
			aria-labelledby={`instruction ${operation} model`}
			aria-describedby={`instruction ${operation} model`}
		>
			<Box sx={style}>
				<Typography id="modal-title" variant="h6" component="h2">
					{operation} an instruction
				</Typography>
				<Formik
					initialValues={initialValues}
					onSubmit={(values) => {
						submitHandle(values);
					}}
					validationSchema={validationSchema}
				>
					<Form>
						<Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
							<TextfieldWrapper
								name="instruction"
								label="Step"
								multiline={true}
								rows={2}
								required={true}
							></TextfieldWrapper>
							<Box sx={{ display: "flex", gap: 1 }}>
								<ResetButtonWrapper sx={{ mt: 1, mr: 1 }}>
									Clear
								</ResetButtonWrapper>
								<SubmitButtonWrapper sx={{ mt: 1, mr: 1 }}>
									Add
								</SubmitButtonWrapper>
							</Box>
						</Box>
					</Form>
				</Formik>
			</Box>
		</Modal>
	);
};

MethodModal.propTypes = {
	setModalOpenStatus: PropTypes.func,
	addInstruction: PropTypes.func,
	modalOpenStatus: PropTypes.bool,
	operation: PropTypes.string,
};
