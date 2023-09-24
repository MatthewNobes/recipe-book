import { Formik, Form } from "formik";
import * as yup from "yup";
import { Box, Typography } from "@mui/material";
import {
	AutoCompleteWrapper,
	TextfieldWrapper,
	SubmitButtonWrapper,
} from "../../../FormUI";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	getAllCountries,
	getAllRegions,
	getAllCategories,
} from "../../../../data";
import { KeywordsForm } from "./KeywordsForm/KeywordsForm";
import Loading from "components/Loading";

export const BasicDetailsForm = (props) => {
	const [countries, setCountries] = useState([]);
	const [regions, setRegions] = useState([]);
	const [categories, setCategories] = useState();
	const [keywords, setKeywords] = useState(props.keywords);

	const vegStatusOptions = [
		{ id: 0, label: "N/A" },
		{ id: 1, label: "Vegetarian" },
		{ id: 2, label: "Vegan" },
	];

	useEffect(() => {
		const fetchComboBoxData = async () => {
			const countriesArray = await getAllCountries();
			const countriesResultArray = countriesArray.map((country, index) => {
				return { id: index, label: country.name };
			});
			setCountries(countriesResultArray);

			const regionsArray = await getAllRegions();
			const regionsResultArray = regionsArray.map((region, index) => {
				return { id: index, label: region.region };
			});
			setRegions(regionsResultArray);

			const categoriesArray = await getAllCategories();
			const categoriesResultArray = categoriesArray.map((category, index) => {
				return { id: index, label: category.categories };
			});
			setCategories(categoriesResultArray);
		};
		fetchComboBoxData();
	}, []);

	const validationSchema = yup.object().shape({
		name: yup
			.string()
			.required("Required")
			.max(85, "Must not be greater than 85 characters"),
		description: yup
			.string()
			.required("Required")
			.max(512, "Must not be greater than 512 characters"),
		difficultyRating: yup
			.number()
			.positive("Must be positive")
			.integer("Must be a whole number")
			.min(1, "Must be between 1 and 10")
			.max(10, "Must be between 1 and 10"),
		prepTime: yup
			.number()
			.required("Required")
			.moreThan(-1, "Must be positive")
			.integer("Must be a whole number"),
		cookTime: yup
			.number()
			.required("Required")
			.moreThan(-1, "Must be positive")
			.integer("Must be a whole number"),
		source: yup
			.string()
			.max(512, "Must not be greater than 512 characters")
			.url("Must be a URL")
			.nullable(),
		servingNumber: yup
			.number()
			.required("Required")
			.positive("Must be positive")
			.integer("Must be a whole number")
			.min(1, "Must be at least 1"),

		country: yup.string().max(85, "Must not be greater than 85 characters"),
		region: yup.string().max(85, "Must not be greater than 85 characters"),
		category: yup.string().max(85, "Must not be greater than 85 characters"),
		keywords: yup.array(),
		vegStatus: yup.string().max(85, "Must not be greater than 85 characters"),
	});

	const submitHandle = (values) => {
		props.setRecipeFn({
			name: values.name,
			description: values.description,
			difficultyRating: values.difficultyRating,
			prepTime: values.prepTime,
			cookTime: values.cookTime,
			source: values.source,
			servingNumber: values.servingNumber,
			country: values.country,
			region: values.region,
			category: values.category,
			keywords: keywords,
			vegStatus: values.vegStatus,
		});
		props.handleNext();
	};

	if (categories && countries && regions) {
		return (
			<Box>
				{categories.length > 0 && countries.length > 0 && regions.length > 0 ? (
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
									name="name"
									label="Name"
									required={true}
								></TextfieldWrapper>
								<TextfieldWrapper
									name="description"
									label="Description"
									multiline={true}
									rows={4}
									required={true}
								></TextfieldWrapper>
								<AutoCompleteWrapper
									name="category"
									label="Category"
									options={categories}
								></AutoCompleteWrapper>
								<TextfieldWrapper
									name="difficultyRating"
									label="Difficulty Rating"
									type="number"
								></TextfieldWrapper>
								<TextfieldWrapper
									name="prepTime"
									label="Preparation time (in minutes)"
									type="number"
									required={true}
								></TextfieldWrapper>
								<TextfieldWrapper
									name="cookTime"
									label="Cooking time (in minutes)"
									type="number"
									required={true}
								></TextfieldWrapper>
								<TextfieldWrapper
									name="source"
									label="Source URL"
								></TextfieldWrapper>
								<TextfieldWrapper
									name="servingNumber"
									label="Serving number"
									type="number"
									required={true}
								></TextfieldWrapper>
								<AutoCompleteWrapper
									name="country"
									label="Country"
									options={countries}
								></AutoCompleteWrapper>
								<AutoCompleteWrapper
									name="region"
									label="Region"
									options={regions}
								></AutoCompleteWrapper>
								<AutoCompleteWrapper
									name="vegStatus"
									label="Vegetarian or Vegan"
									options={vegStatusOptions}
								></AutoCompleteWrapper>
								<KeywordsForm
									keywords={keywords}
									addKeyword={(newKeyword) =>
										setKeywords([...keywords, newKeyword])
									}
									removeKeyword={(idToRemove) => {
										const updatedKeywords = keywords;
										updatedKeywords.splice(idToRemove, 1);
										setKeywords([...updatedKeywords]);
									}}
								/>
							</Box>
							<Box sx={{ marginY: 2, float: "right" }}>
								<SubmitButtonWrapper sx={{ mt: 1, mr: 1 }}>
									Next
								</SubmitButtonWrapper>
							</Box>
						</Form>
					</Formik>
				) : (
					<Typography>
						Required data unavailable at this current time
					</Typography>
				)}
			</Box>
		);
	} else {
		<Loading />;
	}
};

BasicDetailsForm.propTypes = {
	setRecipeFn: PropTypes.func,
	handleNext: PropTypes.func,
	recipeValues: PropTypes.object,
	keywords: PropTypes.array,
};
