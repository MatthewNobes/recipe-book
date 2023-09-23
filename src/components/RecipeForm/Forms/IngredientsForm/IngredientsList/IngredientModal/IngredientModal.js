import { Modal, Typography, Box, Tooltip } from "@mui/material";
import * as yup from "yup";
import { Formik, Form } from "formik";
import InfoIcon from "@mui/icons-material/Info";
import {
	TextfieldWrapper,
	SubmitButtonWrapper,
	AutoCompleteWrapper,
	ResetButtonWrapper,
	CheckboxWrapper,
} from "../../../../../FormUI";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getAllUnits } from "../../../../../../data";
import Loading from "components/Loading";

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
		.required("An ingredient is required")
		.max(85, "Must not be greater than 85 characters"),
	measurement: yup.string(),
	quantity: yup
		.number()
		.min(0.1, "Must be at least 0.1")
		.max(2147483647, "Too large")
		.required("A quantity is required"),
	optional: yup.bool(),
});

const initialValues = {
	name: "",
	measurement: "",
	quantity: 0,
	optional: false,
};

export const IngredientModal = ({
	operation,
	setModalOpenStatus,
	addIngredient,
	modalOpenStatus,
}) => {
	const [units, setUnits] = useState();

	const handleClose = () => setModalOpenStatus(false);

	const submitHandle = (values) => {
		addIngredient({
			name: values.name,
			quantity: values.quantity,
			measurement: values.measurement,
			optional: values.optional,
		});

		handleClose();
	};

	useEffect(() => {
		const populateUnits = async () => {
			const incomingUnits = await getAllUnits();
			const toAddUnits = incomingUnits.map((unit) => {
				return { id: unit.id, label: unit.unit };
			});
			setUnits(toAddUnits);
		};
		populateUnits();
	}, []);

	return (
		<Modal
			open={modalOpenStatus}
			onClose={handleClose}
			aria-labelledby={`ingredient ${operation} model`}
			aria-describedby={`ingredient ${operation} model`}
		>
			<Box sx={style}>
				{units ? (
					units.length > 0 ? (
						<Box>
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
									<Box
										sx={{ display: "flex", gap: 2, flexDirection: "column" }}
									>
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
										<Box
											sx={{
												display: "flex",
												justifyContent: "flex-start",
											}}
										>
											<CheckboxWrapper name="optional" label="Optional" />
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
					) : (
						<Typography>Unable to add units</Typography>
					)
				) : (
					<Loading />
				)}
			</Box>
		</Modal>
	);
};

IngredientModal.propTypes = {
	operation: PropTypes.string,
	setModalOpenStatus: PropTypes.func,
	addIngredient: PropTypes.func,
	modalOpenStatus: PropTypes.bool,
};
