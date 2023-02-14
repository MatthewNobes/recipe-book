import { TextField } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

export const TextfieldWrapper = ({ name, ...otherProps }) => {
	const [field, mata] = useField(name);

	const configTextfield = {
		...field,
		...otherProps,
		fullWidth: true,
		variant: "outlined",
	};

	if (mata && mata.touched && mata.error) {
		configTextfield.error = true;
		configTextfield.helperText = mata.error;
	}

	return <TextField {...configTextfield} />;
};

TextfieldWrapper.propTypes = {
	name: PropTypes.string,
};
