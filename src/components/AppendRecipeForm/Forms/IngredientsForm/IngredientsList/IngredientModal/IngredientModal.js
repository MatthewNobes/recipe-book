import { useState, useEffect } from "react";
import { Modal, Typography, Box, Tooltip } from "@mui/material";
import * as yup from "yup";
import { Formik, Form } from "formik";
import InfoIcon from "@mui/icons-material/Info";
import {
	TextfieldWrapper,
	SubmitButtonWrapper,
	AutoCompleteWrapper,
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
	ingredient: yup
		.string()
		.required("Required")
		.max(85, "Must not be greater than 85 characters"),
	measurement: yup.number().required("Required"),
	ingredientQuantity: yup
		.number()
		.min(0.1, "Must be at least 0.1")
		.max(2147483647, "Too large")
		.required("A quantity is required"),
});

const initialValues = {
	ingredient: "",
	measurement: 1,
	ingredientQuantity: 0,
};

export const IngredientModal = (props) => {
	const operation = props.operation;

	const handleClose = () => props.setModalOpenStatus(false);

	const [existingIngredients, setExistingIngredients] = useState([]);

	const [existingMeasurements, setExistingMeasurements] = useState([]);

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + "/ingredients/ingredients")
			.then((response) => response.json())
			.then((data) => setExistingIngredients(data))
			.catch(() => {
				setExistingIngredients([]);
			});

		fetch(process.env.REACT_APP_API_URL + "/measurementTypes/measurementTypes")
			.then((response) => response.json())
			.then((data) => setExistingMeasurements(data))
			.catch(() => {
				setExistingMeasurements([]);
			});
	}, []);

	const clearForm = (values) => {
		console.log(values);
	};

	const submitHandle = (values) => {
		console.log(existingIngredients + existingMeasurements);
		console.log(values);

		props.addIngredient({
			ingredient: values.ingredient,
			quantity: values.ingredientQuantity,
			measurement: values.measurement,
		});

		clearForm(values);
		handleClose();
	};

	const units = props.units;

	return (
		<Modal
			open={props.modalOpenStatus}
			onClose={handleClose}
			aria-labelledby="ingredient add/edit model"
			aria-describedby="ingredient add/edit model"
		>
			<Box sx={style}>
				<Typography id="modal-title" variant="h6" component="h2">
					{operation} Ingredient
					<Tooltip title="Preset options available for ingredients and measurements are existing entries and should be prioritised for selection over creating a new entry.">
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
								name="ingredient"
								label="Ingredient"
								required={true}
							></TextfieldWrapper>
							<Box sx={{ display: "flex", gap: 1, flexDirection: "row" }}>
								<TextfieldWrapper
									name="ingredientQuantity"
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

IngredientModal.propTypes = {
	operation: PropTypes.string,
	setModalOpenStatus: PropTypes.func,
	addIngredient: PropTypes.func,
	units: PropTypes.array,
	modalOpenStatus: PropTypes.bool,
};
