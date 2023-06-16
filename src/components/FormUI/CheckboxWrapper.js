import { Checkbox, FormControlLabel } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

export const CheckboxWrapper = ({ name, ...otherProps }) => {
	const [field, mata] = useField(name);

	const configTextfield = {
		...field,
		...otherProps,
		variant: "outlined",
	};

	if (mata && mata.touched && mata.error) {
		configTextfield.error = true;
		configTextfield.helperText = mata.error;
	}

	return (
		<FormControlLabel
			control={
				<Checkbox
					{...configTextfield}
					checked={mata.value}
					value={mata.value}
				/>
			}
			label={otherProps.label}
			labelPlacement="end"
		/>
	);
};

CheckboxWrapper.propTypes = {
	name: PropTypes.string,
};
