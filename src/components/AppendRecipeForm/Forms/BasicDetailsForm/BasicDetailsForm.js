import { Formik, Form } from "formik";
import * as yup from "yup";
import { Box } from "@mui/material";
// import { utf8Encode } from "../../utils";
import {
	AutoCompleteWrapper,
	TextfieldWrapper,
	SubmitButtonWrapper,
} from "../../../FormUI";

export const BasicDetailsForm = (props) => {
	console.log("rerendered");
	const validationSchema = yup.object().shape({
		recipeName: yup.string().required("Name is required"),
		recipeDescription: yup.string().required("Description is required"),
		difficultyRating: yup.number(),
		recipePrepTime: yup.number().required("Prep time is required"),
		recipeCookTime: yup.number().required("Cook time is required"),
		recipeSource: yup.string(),
		servingNumber: yup.number().required("Serving number is required"),
		region: yup.number(),
		country: yup.number(),
		category: yup.number(),
	});

	// needs to be populated from the db
	const categories = [
		{ id: 1, label: "Appetisers" },
		{ id: 2, label: "Entrees" },
		{ id: 3, label: "Deserts" },
		{ id: 4, label: "Lunch" },
		{ id: 5, label: "Snacks" },
		{ id: 6, label: "Sauces" },
	];

	const countries = [
		{ id: 1, label: "British" },
		{ id: 2, label: "French" },
		{ id: 3, label: "Italian" },
		{ id: 4, label: "Russian" },
	];

	const regions = [
		{ id: 1, label: "Mediterranean" },
		{ id: 2, label: "North American" },
		{ id: 3, label: "Asian" },
		{ id: 4, label: "Lunch" },
		{ id: 5, label: "Snacks" },
		{ id: 6, label: "Sauces" },
	];

	const submitHandle = (values) => {
		props.setRecipeFn({
			recipeName: values.recipeName,
			recipeDescription: values.recipeDescription,
			difficultyRating: values.difficultyRating,
			recipePrepTime: values.recipePrepTime,
			recipeCookTime: values.recipeCookTime,
			recipeSource: values.recipeSource,
			servingNumber: values.servingNumber,
			regionID: values.region,
			countryID: values.country,
			categoryID: values.category,
		});
		props.handleNext();
	};

	return (
		<Formik
			initialValues={props.recipeValues}
			onSubmit={(values) => {
				submitHandle(values);
			}}
			validationSchema={validationSchema}
		>
			<Form>
				<Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
					<TextfieldWrapper
						name="recipeName"
						label="Name"
						required={true}
					></TextfieldWrapper>
					<TextfieldWrapper
						name="recipeDescription"
						label="Description"
						multiline={true}
						rows={4}
						required={true}
					></TextfieldWrapper>
					<TextfieldWrapper
						name="difficultyRating"
						label="Difficulty Rating"
						type="number"
					></TextfieldWrapper>
					<TextfieldWrapper
						name="recipePrepTime"
						label="Preparation time"
						type="number"
						required={true}
					></TextfieldWrapper>
					<TextfieldWrapper
						name="recipeCookTime"
						label="Cooking time"
						type="number"
						required={true}
					></TextfieldWrapper>
					<TextfieldWrapper
						name="recipeSource"
						label="Source URL"
					></TextfieldWrapper>
					<TextfieldWrapper
						name="servingNumber"
						label="Serving number"
						type="number"
						required={true}
					></TextfieldWrapper>
					<AutoCompleteWrapper
						name="region"
						label="Region"
						options={regions}
					></AutoCompleteWrapper>
					<AutoCompleteWrapper
						name="country"
						label="Country"
						options={countries}
					></AutoCompleteWrapper>
					<AutoCompleteWrapper
						name="category"
						label="Category"
						options={categories}
					></AutoCompleteWrapper>
				</Box>
				<Box sx={{ marginY: 2, float: "right" }}>
					<SubmitButtonWrapper sx={{ mt: 1, mr: 1 }}>Next</SubmitButtonWrapper>
				</Box>
			</Form>
		</Formik>
	);
};
