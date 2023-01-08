import { Modal, Typography, Box } from "@mui/material";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { TextfieldWrapper, SubmitButtonWrapper } from "../../../../../FormUI";

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
	instruction: yup.string().required("An instruction is required"),
});

const initialValues = {
	instruction: "",
};

export const MethodModal = (props) => {
	const handleClose = () => props.setModalOpenStatus(false);

	const clearForm = (values) => {
		console.log(values);
	};

	const submitHandle = (values) => {
		props.addInstruction({
			instruction: values.instruction,
		});

		clearForm(values);
		handleClose();
	};

	return (
		<Modal
			open={props.modalOpenStatus}
			onClose={handleClose}
			aria-labelledby="instruction add/edit model"
			aria-describedby="instruction add/edit model"
		>
			<Box sx={style}>
				<Typography id="modal-title" variant="h6" component="h2">
					Add/edit an instruction
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
								label="instruction"
								required={true}
							></TextfieldWrapper>
							<SubmitButtonWrapper sx={{ mt: 1, mr: 1 }}>
								Add
							</SubmitButtonWrapper>
						</Box>
					</Form>
				</Formik>
			</Box>
		</Modal>
	);
};
