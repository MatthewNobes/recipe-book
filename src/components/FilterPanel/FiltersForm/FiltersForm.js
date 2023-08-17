import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import * as yup from "yup";
import {
	AutoCompleteWrapper,
	SubmitButtonWrapper,
	ResetButtonWrapper,
} from "components/FormUI";
import { getAllCountries } from "data";
import { Box } from "@mui/material";

export const FilterForm = ({ filterValues, setFilterValues }) => {
	const [countries, setCountries] = useState([]);
	const difficulties = [
		{ id: 1, label: "Easy 1-3" },
		{ id: 2, label: "Medium 4-7" },
		{ id: 3, label: "Hard 7-10" },
	];
	const totalTime = [
		{ id: 1, label: "Less than 30 mins" },
		{ id: 2, label: "Less than 1hr" },
		{ id: 3, label: "More than 1hr" },
	];

	useEffect(() => {
		const fetchComboBoxData = async () => {
			const countriesArray = await getAllCountries();
			const countriesResultArray = countriesArray.map((country, index) => {
				return { id: index, label: country.name };
			});
			setCountries(countriesResultArray);
		};
		fetchComboBoxData();
	}, []);

	const submitHandle = (values) => {
		setFilterValues(values);
		console.log("confirm and save filters");
	};

	const validationSchema = yup.object().shape({
		countries: yup.string().max(85, "Must not be greater than 85 characters"),
		difficulty: yup.string(),
		totalTime: yup.string(),
	});

	return (
		<Formik
			initialValues={filterValues}
			onSubmit={(values) => {
				submitHandle(values);
			}}
			validationSchema={validationSchema}
		>
			<Form>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "center",
						gap: 2,
					}}
				>
					<AutoCompleteWrapper
						name="countries"
						label="Countries"
						options={countries}
						sx={{ maxWidth: "400px" }}
					/>
					<AutoCompleteWrapper
						name="difficulty"
						label="Difficulty"
						options={difficulties}
						sx={{ maxWidth: "400px" }}
					/>
					<AutoCompleteWrapper
						name="totalTime"
						label="Total Time"
						options={totalTime}
						sx={{ maxWidth: "400px" }}
					/>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "row", gap: 2, my: 2 }}>
					<ResetButtonWrapper sx={{ mt: 1, mr: 1 }}>Reset</ResetButtonWrapper>
					<SubmitButtonWrapper sx={{ mt: 1, mr: 1 }}>Save</SubmitButtonWrapper>
				</Box>
			</Form>
		</Formik>
	);
};

FilterForm.propTypes = {
	filterValues: PropTypes.object,
	setFilterValues: PropTypes.func,
};
