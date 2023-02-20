import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

export const ResetButtonWrapper = ({ children }) => {
	const { resetForm } = useFormikContext();

	const handleReset = () => {
		resetForm();
	};

	const configButton = {
		variant: "outlined",
		color: "primary",
		fullWidth: true,
		onClick: handleReset,
	};

	return <Button {...configButton}>{children}</Button>;
};

ResetButtonWrapper.propTypes = {
	children: PropTypes.string,
};
