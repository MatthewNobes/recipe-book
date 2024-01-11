import { SubPageHeader, Loading, Page } from "components";
import { RoleList } from "./RoleList/RoleList";
import { useEffect, useState } from "react";
import { setToast } from "store/slices/toastSlice/toastSlice";
import { useDispatch } from "react-redux";
import { UpsertRoleModel } from "./UpsertRoleModel/UpsertRoleModel";
import { getAllRoles, addRole, updateRole } from "data";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import { deleteRole } from "data/roles";

export const RoleManagementAdmin = () => {
	const dispatch = useDispatch();
	const [roles, setRoles] = useState();
	const [operation, setOperation] = useState("Add");
	const [modelOpenStatus, setModelOpenStatus] = useState(false);
	const [roleToEdit, setRoleToEdit] = useState();

	const populateRoles = async () => {
		const incomingRoles = await getAllRoles();
		setRoles(incomingRoles);
		setOperation("Add");
	};

	const upsertRole = async (roleToUpsert) => {
		let result;

		if (operation === "Add") {
			result = await addRole({
				role: roleToUpsert.role,
				description: roleToUpsert.description,
			});
		} else {
			result = await updateRole(roleToUpsert, roleToUpsert.id);
		}

		if (result.result === "success") {
			dispatch(
				setToast({
					message: `${operation} role successful`,
					alertType: "success",
					isOpen: true,
				}),
			);
		} else {
			dispatch(
				setToast({
					message: `Failed to ${operation.toLowerCase()} role`,
					alertType: "error",
					isOpen: true,
				}),
			);
		}
		populateRoles();
	};

	const triggerEditRoleModel = (role) => {
		setOperation("Update");
		setRoleToEdit(role);
		setModelOpenStatus(true);
	};

	const onModelClose = () => {
		setOperation("Add");
		setRoleToEdit();
		setModelOpenStatus(false);
	};

	useEffect(() => {
		populateRoles();
	}, []);

	return (
		<>
			<UpsertRoleModel
				operation={operation}
				modelOpenStatus={modelOpenStatus}
				onModelClose={onModelClose}
				upsertRole={upsertRole}
				valueToEdit={roleToEdit}
			/>
			<Fab
				color="primary"
				aria-label="add"
				sx={{ position: "absolute", bottom: 72, right: 16 }}
				onClick={() => setModelOpenStatus(true)}
			>
				<Add />
			</Fab>

			<SubPageHeader headerText="Role Management Admin" />
			<Page>
				{roles ? (
					<RoleList
						roles={roles}
						deleteRole={deleteRole}
						populateRoles={populateRoles}
						triggerEditRoleModel={triggerEditRoleModel}
					/>
				) : (
					<Loading />
				)}
			</Page>
		</>
	);
};
