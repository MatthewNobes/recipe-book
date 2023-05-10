import {
	InputAdornment,
	Chip,
	InputLabel,
	FormControl,
	Box,
	Paper,
} from "@mui/material";
import {
	OutlinedInputWrapper,
	SubmitIconButtonWrapper,
} from "../../../../FormUI";
import * as yup from "yup";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import { Add } from "@mui/icons-material";

const KeywordOutput = ({ keywords, removeKeyword }) => {
	if (keywords.length > 0) {
		return (
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1,
				}}
			>
				{keywords.map((keyword, index) => {
					return (
						<Chip
							key={index}
							label={keyword}
							onDelete={() => {
								removeKeyword(index);
							}}
						/>
					);
				})}
			</Box>
		);
	}
};

export const KeywordsBlock = ({ keywords, addKeyword, removeKeyword }) => {
	const initialValues = { keyword: "" };

	const validationSchema = yup.object().shape({
		keyword: yup
			.string()
			.required("Required")
			.max(85, "Must not be greater than 85 characters"),
	});

	const submitHandle = (values) => {
		addKeyword(values.keyword);
		values.keyword = "";
	};

	return (
		<Paper
			component="div"
			sx={{
				display: "flex",
				flexDirection: "column",
				p: 1,
				gap: 1,
			}}
		>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					submitHandle(values);
				}}
				validationSchema={validationSchema}
			>
				<Form component="div">
					<FormControl variant="outlined" sx={{ width: "100%" }}>
						<InputLabel htmlFor="keyword">New Keyword</InputLabel>
						<OutlinedInputWrapper
							id="keyword"
							name="keyword"
							label="New Keyword"
							type="string"
							aria-label="new keyword"
							endAdornment={
								<InputAdornment position="end">
									<SubmitIconButtonWrapper aria-label="add keyword" edge="end">
										<Add />
									</SubmitIconButtonWrapper>
								</InputAdornment>
							}
						/>
					</FormControl>
				</Form>
			</Formik>
			<KeywordOutput keywords={keywords} removeKeyword={removeKeyword} />
		</Paper>
	);
};

KeywordsBlock.propTypes = {
	keywords: PropTypes.array,
	addKeyword: PropTypes.func,
	removeKeyword: PropTypes.func,
};

KeywordOutput.propTypes = {
	keywords: PropTypes.array,
	removeKeyword: PropTypes.func,
};
