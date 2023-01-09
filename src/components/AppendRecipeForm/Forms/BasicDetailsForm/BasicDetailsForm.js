import { Formik, Form } from "formik";
import * as yup from "yup";
import { Box } from "@mui/material";
import {
	AutoCompleteWrapper,
	TextfieldWrapper,
	SubmitButtonWrapper,
} from "../../../FormUI";
import { useState, useEffect } from "react";

export const BasicDetailsForm = (props) => {
	const [categories, setCategories] = useState([
		{ countryID: 1, label: "Appetisers" },
		{ countryID: 2, label: "Entrees" },
		{ countryID: 3, label: "Deserts" },
		{ countryID: 4, label: "Lunch" },
		{ countryID: 5, label: "Snacks" },
		{ countryID: 6, label: "Sauces" },
	]);

	const [countries, setCountries] = useState([
		{ id: 1, label: "British" },
		{ id: 2, label: "French" },
		{ id: 3, label: "Italian" },
		{ id: 4, label: "Russian" },
	]);

	const [regions, setRegions] = useState([
		{ id: 1, label: "Mediterranean" },
		{ id: 2, label: "North American" },
		{ id: 3, label: "Asian" },
		{ id: 4, label: "Lunch" },
		{ id: 5, label: "Snacks" },
		{ id: 6, label: "Sauces" },
	]);

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + "/countries/countries")
			.then((response) => response.json())
			.then((data) => {
				setCountries(
					data.data.map((country) => {
						return { id: country.countryID, label: country.country };
					}),
				);
			});

		// BLOCKER: awaiting correct route
		fetch(process.env.REACT_APP_API_URL + "/countries/countries")
			.then((response) => response.json())
			.then((data) => {
				setCategories(
					data.data.map((country) => {
						return { id: country.countryID, label: country.country };
					}),
				);
			});

		// BLOCKER: awaiting correct route
		fetch(process.env.REACT_APP_API_URL + "/countries/countries")
			.then((response) => response.json())
			.then((data) => {
				setRegions(
					data.data.map((country) => {
						return { id: country.countryID, label: country.country };
					}),
				);
			});
	}, []);

	const validationSchema = yup.object().shape({
		recipeName: yup
			.string()
			.required("Required")
			.max(85, "Must not be greater than 85 characters"),
		recipeDescription: yup
			.string()
			.required("Required")
			.max(85, "Must not be greater than 85 characters"),
		difficultyRating: yup
			.number()
			.positive("Must be positive")
			.integer("Must be a whole number")
			.min(1, "Must be at least 1")
			.max(10, "Must be under 10"),
		recipePrepTime: yup
			.number()
			.required("Required")
			.positive("Must be positive")
			.integer("Must be a whole number"),
		recipeCookTime: yup
			.number()
			.required("Required")
			.positive("Must be positive")
			.integer("Must be a whole number"),
		recipeSource: yup
			.string()
			.max(85, "Must not be greater than 85 characters"),
		servingNumber: yup
			.number()
			.required("Required")
			.positive("Must be positive")
			.integer("Must be a whole number")
			.min(1, "Must be at least 1"),
		region: yup.number(),
		country: yup.number(),
		category: yup.number(),
	});

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
						label="Preparation time (in minutes)"
						type="number"
						required={true}
					></TextfieldWrapper>
					<TextfieldWrapper
						name="recipeCookTime"
						label="Cooking time (in minutes)"
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
