import { Switch, FormControlLabel, Box } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

export const ToggleSwitchWrapper = ({ name, ...otherProps }) => {
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
		<Box sx={{ width: "100%", marginTop: 2 }}>
			<FormControlLabel
				control={
					<Switch
						{...configTextfield}
						checked={mata.value}
						value={mata.value}
					/>
				}
				label={otherProps.label}
				labelPlacement="start"
			/>
		</Box>
	);
};

ToggleSwitchWrapper.propTypes = {
	name: PropTypes.string,
};
