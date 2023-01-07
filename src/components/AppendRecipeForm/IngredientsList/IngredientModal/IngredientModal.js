import { useState, useEffect } from "react";
import { Modal, Typography, Box, Tooltip } from "@mui/material";
import * as yup from "yup";
import { Formik, Form } from "formik";
import InfoIcon from "@mui/icons-material/Info";
import {
	TextfieldWrapper,
	SubmitButtonWrapper,
	AutoCompleteWrapper,
} from "../../../FormUI";

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
	ingredient: yup.string().required("An ingredient is required"),
	measurement: yup.number().required("An unit is required"),
	ingredientQuantity: yup
		.number()
		.min(0.1, "Must be at least 0.1")
		.required("A quantity is required"),
});

const initialValues = {
	ingredient: "",
	measurement: 1,
	ingredientQuantity: 0,
};

export const IngredientModal = (props) => {
	const ingredientsArray = props.ingredientsArray;
	const operation = props.operation;

	const handleClose = () => props.setModalOpenStatus(false);

	const [existingIngredients, setExistingIngredients] = useState([]);

	const [existingMeasurements, setExistingMeasurements] = useState([]);

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + "/ingredients/ingredients")
			.then((response) => response.json())
			.then((data) => setExistingIngredients(data));

		fetch(process.env.REACT_APP_API_URL + "/measurementTypes/measurementTypes")
			.then((response) => response.json())
			.then((data) => setExistingMeasurements(data));
	}, []);

	const clearForm = (values) => {
		console.log(values);
	};

	const submitHandle = (values) => {
		console.log(existingIngredients + existingMeasurements);
		console.log(values);

		const newID =
			ingredientsArray === true
				? ingredientsArray[ingredientsArray.length - 1].id + 1
				: 1;
		props.addIngredient({
			id: newID,
			ingredient: values.ingredient,
			quantity: values.ingredientQuantity,
			measurement: values.measurement,
		});

		clearForm(values);
		handleClose();
	};

	const units = [
		{ id: 1, label: "kg" },
		{ id: 2, label: "g" },
		{ id: 3, label: "teaspoons" },
		{ id: 4, label: "tablespoons" },
	];

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
