import {
	Modal,
	Typography,
	Box,
	Tooltip,
	FormControlLabel,
	Checkbox,
	FormGroup,
	Button,
} from "@mui/material";
import PropTypes from "prop-types";
import { Info } from "@mui/icons-material";
import { useState } from "react";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "95%",
	maxWidth: 500,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 2,
	textAlign: "center",
	alignItems: "center",
};

export const NewRoleModel = ({
	modelOpenStatus,
	setModelOpenStatus,
	handleAddRoles,
	currentlyActiveRoles,
	availableRoles,
}) => {
	const [values, setValues] = useState(currentlyActiveRoles);

	const handleClose = () => {
		setModelOpenStatus(false);
	};

	const onSubmit = () => {
		handleAddRoles(values);
	};

	const onReset = () => {
		setValues(currentlyActiveRoles);
	};

	return (
		<Modal
			open={modelOpenStatus}
			onClose={handleClose}
			aria-labelledby={"new role model"}
			aria-describedby={"new role model"}
		>
			<Box sx={style}>
				<Typography id="modal-title" variant="h6" component="h2">
					Manage Roles
					<Tooltip
						title={
							"Select with the checkboxes which roles would like allocated to the user"
						}
					>
						<Info color="info" sx={{ paddingLeft: 1 }} />
					</Tooltip>
				</Typography>

				<Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
					{availableRoles ? (
						<FormGroup>
							{availableRoles.map((role, index) => {
								const isChecked = currentlyActiveRoles.includes(role.id);

								const onChange = () => {
									if (values.includes(role.id)) {
										const newValues = values.filter(
											(value) => value !== role.id,
										);
										setValues(newValues);
									} else {
										setValues([...values, role.id]);
									}
								};

								return (
									<FormControlLabel
										key={index}
										control={<Checkbox defaultChecked={isChecked} />}
										label={role.role}
										onChange={onChange}
									/>
								);
							})}
						</FormGroup>
					) : (
						<></>
					)}

					<Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
						<Button variant={"contained"} onClick={() => onReset()}>
							Reset
						</Button>
						<Button variant={"outlined"} onClick={() => onSubmit()}>
							Submit
						</Button>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};

NewRoleModel.propTypes = {
	modelOpenStatus: PropTypes.bool,
	setModelOpenStatus: PropTypes.func,
	handleAddRoles: PropTypes.func,
	currentlyActiveRoles: PropTypes.array,
	availableRoles: PropTypes.array,
};
