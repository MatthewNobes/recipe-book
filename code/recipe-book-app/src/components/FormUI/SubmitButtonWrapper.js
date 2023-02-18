import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

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

SubmitButtonWrapper.propTypes = {
	children: PropTypes.string,
};
