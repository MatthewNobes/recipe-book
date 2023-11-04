import { SubPageHeader } from "components";
import { RoleList } from "./RoleList/RoleList";
import { useEffect, useState } from "react";
import { setToast } from "store/slices/toastSlice/toastSlice";
import { useDispatch } from "react-redux";
import { UpsertRoleModel } from "./UpsertRoleModel/UpsertRoleModel";
import { getAllRoles, addRole } from "data";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import { deleteRole } from "data/roles";

export const RoleManagementAdmin = () => {
	const dispatch = useDispatch();
	const [roles, setRoles] = useState();
	const [operation, setOperation] = useState("Add");
	const [modelOpenStatus, setModelOpenStatus] = useState(false);

	const populateRoles = async () => {
		const incomingRoles = await getAllRoles();
		setRoles(incomingRoles);
		setOperation("add");
	};

	useEffect(() => {
		populateRoles();
	}, []);

	return (
		<>
			<UpsertRoleModel
				operation={operation}
				modelOpenStatus={modelOpenStatus}
				setModelOpenStatus={setModelOpenStatus}
				addRole={async (roleToAdd) => {
					const result = await addRole(roleToAdd);
					if (result === undefined) {
						dispatch(
							setToast({
								message: "Failed to add role",
								alertType: "error",
								isOpen: true,
							}),
						);
					} else {
						dispatch(
							setToast({
								message: "Role added",
								alertType: "success",
								isOpen: true,
							}),
						);
						populateRoles();
					}
					populateRoles();
				}}
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
			{roles ? (
				<RoleList
					roles={roles}
					deleteRole={deleteRole}
					populateRoles={populateRoles}
				/>
			) : (
				<></>
			)}
		</>
	);
};
