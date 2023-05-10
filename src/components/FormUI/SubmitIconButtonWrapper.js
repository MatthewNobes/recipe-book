import { IconButton } from "@mui/material";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

export const SubmitIconButtonWrapper = ({ children }) => {
	const { submitForm } = useFormikContext();

	const handleSubmit = () => {
		submitForm();
	};

	const configButton = {
		variant: "contained",
		onClick: handleSubmit,
	};

	return <IconButton {...configButton}>{children}</IconButton>;
};

SubmitIconButtonWrapper.propTypes = {
	children: PropTypes.object,
};
