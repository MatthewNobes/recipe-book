import { Modal, Typography, Box, Tooltip } from "@mui/material";
import * as yup from "yup";
import { Formik, Form } from "formik";
import InfoIcon from "@mui/icons-material/Info";
import {
	TextfieldWrapper,
	SubmitButtonWrapper,
	AutoCompleteWrapper,
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
	name: yup
		.string()
		.required("Required")
		.max(85, "Must not be greater than 85 characters"),
	measurement: yup.string(),
	quantity: yup
		.number()
		.min(0.1, "Must be at least 0.1")
		.max(2147483647, "Too large")
		.required("A quantity is required"),
});

const initialValues = {
	name: "",
	measurement: "",
	quantity: 0,
};

export const IngredientModal = (props) => {
	const operation = props.operation;

	const handleClose = () => props.setModalOpenStatus(false);

	const units = [{ id: 1, label: "g" }];

	const submitHandle = (values) => {
		props.addIngredient({
			name: values.name,
			quantity: values.quantity,
			measurement: values.measurement,
		});

		handleClose();
	};

	return (
		<Modal
			open={props.modalOpenStatus}
			onClose={handleClose}
			aria-labelledby={`ingredient ${operation} model`}
			aria-describedby={`ingredient ${operation} model`}
		>
			<Box sx={style}>
				<Typography id="modal-title" variant="h6" component="h2">
					{operation} Ingredient
					<Tooltip
						title={`Use this form to ${operation} an ingredient for this recipe`}
					>
						<InfoIcon color="info" sx={{ paddingLeft: 1 }} />
					</Tooltip>
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
								name="name"
								label="Ingredient"
								required={true}
							></TextfieldWrapper>
							<Box sx={{ display: "flex", gap: 1, flexDirection: "row" }}>
								<TextfieldWrapper
									name="quantity"
									label="Quantity"
									required={true}
								></TextfieldWrapper>
								<AutoCompleteWrapper
									name="measurement"
									label="Unit"
									required={true}
									options={units}
								></AutoCompleteWrapper>
							</Box>
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

IngredientModal.propTypes = {
	operation: PropTypes.string,
	setModalOpenStatus: PropTypes.func,
	addIngredient: PropTypes.func,
	units: PropTypes.array,
	modalOpenStatus: PropTypes.bool,
};
