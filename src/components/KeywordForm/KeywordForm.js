import { OutlinedInputWrapper, SubmitIconButtonWrapper } from "components";
import * as yup from "yup";
import { Formik, Form } from "formik";
import {
	InputAdornment,
	InputLabel,
	FormControl,
	Tooltip,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import PropTypes from "prop-types";

export const KeywordForm = ({ addKeyword }) => {
	const validationSchema = yup.object().shape({
		keyword: yup
			.string()
			.required("Required")
			.max(85, "Must not be greater than 85 characters"),
	});

	return (
		<Formik
			initialValues={{ keyword: "" }}
			onSubmit={(values) => {
				addKeyword(values.keyword);
			}}
			validationSchema={validationSchema}
		>
			<Form component="div">
				<FormControl variant="outlined" sx={{ width: "100%" }}>
					<InputLabel htmlFor="keyword">New Keyword</InputLabel>
					<OutlinedInputWrapper
						id="keyword"
						name="keyword"
						label="Add Keyword"
						type="string"
						aria-label="new keyword"
						endAdornment={
							<Tooltip title="Add keyword" placement="left">
								<InputAdornment position="end">
									<SubmitIconButtonWrapper aria-label="add keyword" edge="end">
										<Add />
									</SubmitIconButtonWrapper>
								</InputAdornment>
							</Tooltip>
						}
					/>
				</FormControl>
			</Form>
		</Formik>
	);
};

KeywordForm.propTypes = {
	addKeyword: PropTypes.func,
};
