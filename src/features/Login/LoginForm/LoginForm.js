import { Typography, Box } from "@mui/material";
import { Formik, Form } from "formik";
import { TextfieldWrapper, SubmitButtonWrapper } from "components";
import { Lock } from "@mui/icons-material";
import { auth } from "data";
import { useDispatch } from "react-redux";
import { setToast } from "store/slices/toastSlice/toastSlice";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
			if (process.env.NODE_ENV === "development") {
				navigate(-2);
			} else {
				navigate(-1);
			}
		}
	};

	return (
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
	);
};
