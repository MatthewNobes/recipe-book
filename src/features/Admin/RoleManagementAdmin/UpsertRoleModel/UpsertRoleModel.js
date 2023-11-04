import * as yup from "yup";
import { Modal, Typography, Box, Tooltip } from "@mui/material";
import { Formik, Form } from "formik";
import InfoIcon from "@mui/icons-material/Info";
import PropTypes from "prop-types";
import {
	ResetButtonWrapper,
	TextfieldWrapper,
	SubmitButtonWrapper,
} from "../../../../components";

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

const validationSchema = yup.object().shape({
	role: yup
		.string()
		.required("A role is required")
		.max(85, "Must not be greater than 85 characters"),
	description: yup.string().max(600, "Must not be greater than 600 characters"),
});

export const UpsertRoleModel = ({
	operation,
	modelOpenStatus,
	setModelOpenStatus,
	addRole,
	valueToEdit,
}) => {
	const handleClose = () => setModelOpenStatus(false);

	const submitHandle = (values) => {
		addRole({
			role: values.role,
			description: values.role,
		});

		handleClose();
	};

	let initialValues = {
		role: "",
		description: "",
	};

	if (operation === "edit") {
		initialValues = valueToEdit;
	}

	return (
		<Modal
			open={modelOpenStatus}
			onClose={handleClose}
			aria-labelledby={`unit ${operation} model`}
			aria-describedby={`unit ${operation} model`}
		>
			<Box sx={style}>
				<Typography id="modal-title" variant="h6" component="h2">
					{operation} Role
					<Tooltip title={`Use this form to ${operation} a unit`}>
						<InfoIcon color="info" sx={{ paddingLeft: 1 }} />
					</Tooltip>
				</Typography>
				<Formik
					initialValues={initialValues}
					onSubmit={(values) => {
						submitHandle(values);
					}}
					validationSchema={validationSchema}
				>
					<Form>
						<Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
							<TextfieldWrapper name="role" label="Role name" required={true} />
							<TextfieldWrapper
								name="description"
								label="Description"
								required={false}
							/>
							<Box sx={{ display: "flex", gap: 1 }}>
								<ResetButtonWrapper sx={{ mt: 1, mr: 1 }}>
									Clear
								</ResetButtonWrapper>
								<SubmitButtonWrapper sx={{ mt: 1, mr: 1 }}>
									Add
								</SubmitButtonWrapper>
							</Box>
						</Box>
					</Form>
				</Formik>
			</Box>
		</Modal>
	);
};

UpsertRoleModel.propTypes = {
	operation: PropTypes.string,
	modelOpenStatus: PropTypes.bool,
	setModelOpenStatus: PropTypes.func,
	addRole: PropTypes.func,
	valueToEdit: PropTypes.object,
};
