import { Box, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { TextfieldWrapper, SubmitButtonWrapper } from "../../components/FormUI";
import { Header } from "../../components";
import { auth } from "../../data";
import { useDispatch } from "react-redux";
import { setToast } from "../../store/slices/toastSlice/toastSlice";

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
		console.log(values);
		const result = await auth(values.email, values.password);

		console.log(result);
		if (result === "success") {
			// direct to the next page
			dispatch(
				setToast({
					message: "Login successful",
					alertType: "success",
					isOpen: true,
				}),
			);
		} else {
			dispatch(
				setToast({
					message: "Login error",
					alertType: "error",
					isOpen: true,
				}),
			);
		}
	};

	return (
		<Box>
			<Header headerText="Recipe Book" />
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
							mt: "40%",
							mx: 1,
						}}
					>
						<Typography variant="h3">Login</Typography>
						<TextfieldWrapper name="email" label="Email" required={true} />
						<TextfieldWrapper
							name="password"
							label="Password"
							type="password"
							required={true}
						/>
						<Box sx={{ marginY: 2, float: "right" }}>
							<SubmitButtonWrapper sx={{ mt: 1, mr: 1 }}>
								Login
							</SubmitButtonWrapper>
						</Box>
					</Box>
				</Form>
			</Formik>
		</Box>
	);
};
