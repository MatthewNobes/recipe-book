import {
	InputAdornment,
	InputLabel,
	FormControl,
	Paper,
	Tooltip,
} from "@mui/material";
import {
	OutlinedInputWrapper,
	SubmitIconButtonWrapper,
} from "../../../../FormUI";
import * as yup from "yup";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import { Add } from "@mui/icons-material";
import { KeywordsBlock } from "./KeywordsBlock";

export const KeywordsForm = ({ keywords, addKeyword, removeKeyword }) => {
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
								<Tooltip title="Add keyword" placement="left">
									<InputAdornment position="end">
										<SubmitIconButtonWrapper
											aria-label="add keyword"
											edge="end"
										>
											<Add />
										</SubmitIconButtonWrapper>
									</InputAdornment>
								</Tooltip>
							}
						/>
					</FormControl>
				</Form>
			</Formik>
			<KeywordsBlock keywords={keywords} removeKeyword={removeKeyword} />
		</Paper>
	);
};

KeywordsForm.propTypes = {
	keywords: PropTypes.array,
	addKeyword: PropTypes.func,
	removeKeyword: PropTypes.func,
};
