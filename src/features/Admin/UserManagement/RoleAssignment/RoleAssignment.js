import { Box, Chip, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { NewRoleModel } from "./NewRoleModel/NewRoleModel";
import { useState } from "react";
import { grantUserRole, removeUsersRole } from "data";
import { useDispatch } from "react-redux";
import { setToast } from "store/slices/toastSlice/toastSlice";

export const RoleAssignment = ({ user, availableRoles, refetchUserData }) => {
	const [modelOpenStatus, setModelOpenStatus] = useState(false);

	const dispatch = useDispatch();

	const handleAddRoles = (rolesToAdd) => {
		usersCurrentRoles.forEach((roleId) => {
			if (!rolesToAdd.includes(roleId)) {
				// remove role if the user already posses it
				handleDeleteRole(roleId);
			}
		});

		rolesToAdd.forEach(async (roleId) => {
			if (!usersCurrentRoles.includes(roleId)) {
				// add role
				const result = await grantUserRole(roleId, user.id);

				if (result.error) {
					dispatch(
						setToast({
							message: "Unable to add role",
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
					refetchUserData();
				}
			}
		});
	};

	const handleDeleteRole = async (roleIDToRemove) => {
		const result = await removeUsersRole(user.id, roleIDToRemove);
		if (result.error) {
			dispatch(
				setToast({
					message: "Unable to remove role",
					alertType: "error",
					isOpen: true,
				}),
			);
		} else {
			dispatch(
				setToast({
					message: "Role removed",
					alertType: "success",
					isOpen: true,
				}),
			);
		}
		refetchUserData();
	};

	const usersCurrentRoles = user.userRoles.map((role) => {
		return role.roles.id;
	});

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				gap: 2,
				justifyContent: "space-between",
			}}
		>
			<NewRoleModel
				modelOpenStatus={modelOpenStatus}
				setModelOpenStatus={setModelOpenStatus}
				handleAddRoles={handleAddRoles}
				currentlyActiveRoles={usersCurrentRoles}
				availableRoles={availableRoles}
			/>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					gap: 2,
				}}
			>
				<Typography variant="body2">Roles:</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						flexWrap: "wrap",
						gap: 1,
					}}
				>
					{user.userRoles.map((role, index) => {
						return (
							<Chip
								key={index + role.roles.role}
								label={role.roles.role}
								size={"small"}
								color="primary"
								onDelete={() => handleDeleteRole(role.roles.id)}
							/>
						);
					})}
				</Box>
			</Box>
			<Button size="small" onClick={() => setModelOpenStatus(true)}>
				Manage roles
			</Button>
		</Box>
	);
};

RoleAssignment.propTypes = {
	user: PropTypes.object,
	availableRoles: PropTypes.array,
	refetchUserData: PropTypes.func,
};
