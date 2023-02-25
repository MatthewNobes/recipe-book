import { Formik, Form } from "formik";
import { SubPageHeader } from "../../components";
import * as yup from "yup";
import {
	TextfieldWrapper,
	ToggleSwitchWrapper,
	SubmitButtonWrapper,
	ResetButtonWrapper,
} from "../../components/FormUI";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
	setFontSize,
	setIsDarkMode,
} from "../../store/slices/appearanceSlice/appearanceSlice";

export const Appearance = () => {
	const validationSchema = yup.object().shape({
		fontSize: yup.string().required("Required"),
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
		<div>
			<SubPageHeader headerText="Appearance" />
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
							<ResetButtonWrapper sx={{ mt: 1, mr: 1 }}>
								Reset
							</ResetButtonWrapper>
							<SubmitButtonWrapper sx={{ mt: 1, mr: 1 }}>
								Submit
							</SubmitButtonWrapper>
						</Box>
					</Form>
				</Formik>
			</Box>
		</div>
	);
};
