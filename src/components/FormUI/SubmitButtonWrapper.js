import { Button } from "@mui/material";
import { useFormikContext } from "formik";

export const SubmitButtonWrapper = ({ children }) => {
	const { submitForm } = useFormikContext();

	const handleSubmit = () => {
		submitForm();
	};

	const configButton = {
		variant: "contained",
		color: "primary",
		fullWidth: true,
		onClick: handleSubmit,
	};

	return <Button {...configButton}>{children}</Button>;
};
