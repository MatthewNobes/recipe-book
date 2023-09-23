import { Modal, Typography, Box } from "@mui/material";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { TextfieldWrapper, SubmitButtonWrapper } from "../../../../../FormUI";
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
	url: yup
		.string()
		.required("Required")
		.max(1024, "Must not be greater than 1024 characters")
		.url("Must be a URL"),
});

const initialValues = {
	url: "",
};

export const ImageModel = ({
	setModalOpenStatus,
	addImage,
	modalOpenStatus,
	operation,
}) => {
	const handleClose = () => setModalOpenStatus(false);

	const clearForm = (values) => {
		console.log(values);
	};

	const submitHandle = (values) => {
		addImage(values.url);
		clearForm(values);
		handleClose();
	};

	return (
		<Modal
			open={modalOpenStatus}
			onClose={handleClose}
			aria-labelledby={`image ${operation} model`}
			aria-describedby={`image ${operation} model`}
		>
			<Box sx={style}>
				<Typography id="modal-title" variant="h6" component="h2">
					{operation} image
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
								name="url"
								label="Image Source URL"
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

ImageModel.propTypes = {
	setModalOpenStatus: PropTypes.func,
	addImage: PropTypes.func,
	modalOpenStatus: PropTypes.bool,
	operation: PropTypes.string,
};
