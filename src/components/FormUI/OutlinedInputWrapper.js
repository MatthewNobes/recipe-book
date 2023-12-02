import { OutlinedInput } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

export const OutlinedInputWrapper = ({ name, ...otherProps }) => {
	const [field, mata] = useField(name);

	const configInput = {
		...field,
		...otherProps,
	};

	if (mata && mata.touched && mata.error) {
		configInput.error = true;
		configInput.helpertext = mata.error;
	}

	return <OutlinedInput {...configInput} />;
};

OutlinedInputWrapper.propTypes = {
	name: PropTypes.string,
};
