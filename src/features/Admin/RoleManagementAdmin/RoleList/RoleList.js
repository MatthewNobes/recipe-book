import { List, ListItem, IconButton, ListItemText } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setToast } from "store/slices/toastSlice/toastSlice";

export const RoleList = ({
	roles,
	deleteRole,
	populateRoles,
	triggerEditRoleModel,
}) => {
	const dispatch = useDispatch();

	return (
		<List>
			{roles.map((role, index) => {
				return (
					<ListItem
						key={index}
						secondaryAction={
							<>
								<IconButton
									sx={{ mx: 0.5 }}
									edge="end"
									aria-label="edit"
									onClick={() => triggerEditRoleModel(role)}
								>
									<Edit />
								</IconButton>
								<IconButton
									sx={{ mx: 0.5 }}
									edge="end"
									aria-label="delete"
									onClick={async () => {
										const result = await deleteRole(role.id);
										if (result === "success") {
											dispatch(
												setToast({
													message: "Role deleted",
													alertType: "success",
													isOpen: true,
												}),
											);
											populateRoles();
										} else {
											dispatch(
												setToast({
													message: "Failed to delete role",
													alertType: "error",
													isOpen: true,
												}),
											);
										}
									}}
								>
									<Delete />
								</IconButton>
							</>
						}
					>
						<ListItemText
							primary={role.role}
							secondary={role.description}
						></ListItemText>
					</ListItem>
				);
			})}
		</List>
	);
};

RoleList.propTypes = {
	roles: PropTypes.array,
	deleteRole: PropTypes.func,
	populateRoles: PropTypes.func,
	triggerEditRoleModel: PropTypes.func,
};
