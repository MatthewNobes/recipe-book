import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Collapse,
} from "@mui/material";
import { Loading } from "components";
import PropTypes from "prop-types";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { RoleAssignment } from "../RoleAssignment/RoleAssignment";

export const UserList = ({ users, availableRoles, refetchUserData }) => {
	if (users && availableRoles) {
		return (
			<List>
				{users.map((user, index) => {
					const [isOpen, setIsOpen] = useState(false);
					return (
						<Box key={index}>
							<ListItem disablePadding>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										width: "100%",
									}}
								>
									<ListItemButton onClick={() => setIsOpen(!isOpen)}>
										<ListItemText primary={user.email} />
										{isOpen ? <ExpandLess /> : <ExpandMore />}
									</ListItemButton>
									<Collapse
										in={isOpen}
										timeout="auto"
										unmountOnExit
										sx={{ px: 2 }}
									>
										<RoleAssignment
											user={user}
											availableRoles={availableRoles}
											refetchUserData={refetchUserData}
										/>
									</Collapse>
								</Box>
							</ListItem>
						</Box>
					);
				})}
			</List>
		);
	} else {
		return <Loading />;
	}
};

UserList.propTypes = {
	users: PropTypes.array,
	availableRoles: PropTypes.array,
	refetchUserData: PropTypes.func,
};
