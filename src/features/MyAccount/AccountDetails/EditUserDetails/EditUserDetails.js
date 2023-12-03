import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Box } from "@mui/material";
import {
	TextfieldWrapper,
	SubmitButtonWrapper,
	ResetButtonWrapper,
} from "components";
import { updateAccountDetails } from "data";
import { useDispatch } from "react-redux";
import { setToast } from "store/slices/toastSlice/toastSlice";

export const EditUserDetails = ({
	userDetails,
	setUserDetails,
	onEditComplete,
}) => {
	const dispatch = useDispatch();

	const validationSchema = yup.object().shape({
		firstName: yup
			.string()
			.required("Required")
			.max(100, "Must not be greater than 100 characters"),
		lastName: yup
			.string()
			.required("Required")
			.max(100, "Must not be greater than 100 characters"),
	});

	const onSubmit = async (values) => {
		const result = await updateAccountDetails(values);

		if (result.result === "failed") {
			dispatch(
				setToast({
					message: "Unable to update details",
					alertType: "failed",
					isOpen: true,
				}),
			);
		} else {
			setUserDetails(result.data[0]);
			onEditComplete(false);
			dispatch(
				setToast({
					message: "Details updates",
					alertType: "success",
					isOpen: true,
				}),
			);
		}
	};

	return (
		<Formik
			initialValues={userDetails}
			onSubmit={(values) => {
				onSubmit(values);
			}}
			validationSchema={validationSchema}
		>
			<Form>
				<Box
					sx={{
						display: "flex",
						gap: 1,
						flexDirection: "column",
						mx: 1,
						mt: 1,
					}}
				>
					<TextfieldWrapper
						name="firstName"
						label="First name"
						required={true}
					/>{" "}
					<TextfieldWrapper name="lastName" label="Last name" required={true} />
					<Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
						<ResetButtonWrapper sx={{ mt: 1, mr: 1 }}>Reset</ResetButtonWrapper>
						<SubmitButtonWrapper sx={{ mt: 1, mr: 1 }}>
							Update
						</SubmitButtonWrapper>
					</Box>
				</Box>
			</Form>
		</Formik>
	);
};

EditUserDetails.propTypes = {
	userDetails: PropTypes.object,
	setUserDetails: PropTypes.func,
	onEditComplete: PropTypes.func,
};
