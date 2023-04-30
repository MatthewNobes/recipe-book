import { Box, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { TextfieldWrapper, SubmitButtonWrapper } from "../../components/FormUI";
import { Header } from "../../components";
import { auth } from "../../data";
import { useDispatch } from "react-redux";
import { setToast } from "../../store/slices/toastSlice/toastSlice";
import { Lock } from "@mui/icons-material";

export const Login = () => {
	const dispatch = useDispatch();

	const loginValues = {
		email: "",
		password: "",
	};

	const validationSchema = yup.object().shape({
		email: yup
			.string()
			.required("Required")
			.email("Must be a valid email")
			.max(85, "Must not be greater than 85 characters"),
		password: yup
			.string()
			.required("Required")
			.max(64, "Must not be greater than 64 characters"),
	});

	const submitHandle = async (values) => {
		const result = await auth(values.email, values.password);

		if (result === "error") {
			// direct to the next page
			dispatch(
				setToast({
					message: "Login error",
					alertType: "error",
					isOpen: true,
				}),
			);
		} else {
			dispatch(
				setToast({
					message: "Login successful",
					alertType: "success",
					isOpen: true,
				}),
			);
		}
	};

	return (
		<Box>
			<Header headerText="Recipe Book" />
			<Box
				sx={{
					backgroundColor: "background.paper",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "80vh",
				}}
			>
				<Box sx={{ mx: 1, boxShadow: 1, maxWidth: "400px", width: "100%" }}>
					<Formik
						initialValues={loginValues}
						onSubmit={(values) => {
							submitHandle(values);
						}}
						validationSchema={validationSchema}
					>
						<Form>
							<Box
								sx={{
									display: "flex",
									gap: 2,
									flexDirection: "column",
									mx: 2,
									my: 2,
									alignItems: "center",
								}}
							>
								<Lock color="primary" fontSize="large" />
								<Typography variant="h3">Sign In</Typography>
								<TextfieldWrapper name="email" label="Email" required={true} />
								<TextfieldWrapper
									name="password"
									label="Password"
									type="password"
									required={true}
								/>
								<SubmitButtonWrapper sx={{ width: "100%" }}>
									Sign In
								</SubmitButtonWrapper>
							</Box>
						</Form>
					</Formik>
				</Box>
			</Box>
		</Box>
	);
};
