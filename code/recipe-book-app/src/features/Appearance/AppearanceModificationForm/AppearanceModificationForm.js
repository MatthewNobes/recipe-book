import { Formik, Form } from "formik";
import * as yup from "yup";
import {
	TextfieldWrapper,
	ToggleSwitchWrapper,
	SubmitButtonWrapper,
	ResetButtonWrapper,
} from "../../../components";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
	setFontSize,
	setIsDarkMode,
} from "../../../store/slices/appearanceSlice/appearanceSlice";

export const AppearanceModificationForm = () => {
	const validationSchema = yup.object().shape({
		fontSize: yup
			.number()
			.required("Font size is required")
			.integer("Font size must be an integer")
			.min(8, "Minimum text size is 8")
			.max(24, "Maximum text size is 24"),
		isDarkMode: yup.bool().required("Required"),
	});

	const dispatch = useDispatch();
	const initialValues = useSelector((state) => state.appearance.appearance);

	const submitHandle = (values) => {
		if (values.fontSize !== initialValues.fontSize) {
			dispatch(setFontSize(values.fontSize));
		}
		if (values.isDarkMode !== initialValues.isDarkMode) {
			dispatch(setIsDarkMode(values.isDarkMode));
		}
	};

	return (
		<Box sx={{ paddingY: 2, paddingX: 2 }}>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					submitHandle(values);
				}}
				validationSchema={validationSchema}
			>
				<Form>
					<TextfieldWrapper
						name="fontSize"
						label="Font Size"
						type="number"
						required={true}
					></TextfieldWrapper>
					<ToggleSwitchWrapper
						name="isDarkMode"
						label="Dark Mode"
					></ToggleSwitchWrapper>
					<Box sx={{ marginY: 2, float: "right", display: "flex", gap: 2 }}>
						<ResetButtonWrapper sx={{ mt: 1, mr: 1 }}>Reset</ResetButtonWrapper>
						<SubmitButtonWrapper sx={{ mt: 1, mr: 1 }}>
							Submit
						</SubmitButtonWrapper>
					</Box>
				</Form>
			</Formik>
		</Box>
	);
};
