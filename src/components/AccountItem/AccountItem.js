import { AccountCircle, Logout } from "@mui/icons-material";
import {
	List,
	ListItemIcon,
	ListItemText,
	ListItem,
	ListItemButton,
	Avatar,
	IconButton,
	Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWelcomeMessage } from "utils";
import { GenericListButtonLink } from "components";
import { signOut, supabase } from "data";
import { useDispatch } from "react-redux";
import { setToast } from "store/slices/toastSlice/toastSlice";
import { setUsersRoles } from "store/slices/usersRoles/usersRoles";

export const AccountItem = () => {
	const navigate = useNavigate();
	const [currentUser, setCurrentUser] = useState();
	const dispatch = useDispatch();

	const [loggedIn, setLoggedIn] = useState(
		supabase.changedAccessToken ? true : false,
	);

	const logout = async () => {
		const result = await signOut();
		if (result === "success") {
			setLoggedIn(false);
			setCurrentUser(undefined);
			dispatch(
				setToast({
					message: "Logged out",
					alertType: "success",
					isOpen: true,
				}),
			);
			dispatch(setUsersRoles([]));
		} else {
			dispatch(
				setToast({
					message: "Failed to log out",
					alertType: "error",
					isOpen: true,
				}),
			);
		}
	};

	useEffect(() => {
		const getCurrentUser = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			if (user) {
				setCurrentUser(user);
			}
		};
		getCurrentUser();
	}, [currentUser]);

	if (loggedIn) {
		if (currentUser) {
			const today = new Date();
			const time = today.getHours();

			return (
				<List>
					<ListItem disablePadding>
						<Tooltip title={"Manage account"}>
							<ListItemButton
								onClick={() => navigate("/settings/myAccount")}
								aria-label="manage account"
							>
								<ListItemIcon>
									<Avatar>{currentUser.email.charAt(0).toUpperCase()}</Avatar>
								</ListItemIcon>
								<ListItemText
									primary={getWelcomeMessage(time)}
									secondary={"Logged in as " + currentUser.email}
								/>
							</ListItemButton>
						</Tooltip>
						<Tooltip title={"Sign out"}>
							<IconButton onClick={() => logout()} aria-label="sign out">
								<Logout />
							</IconButton>
						</Tooltip>
					</ListItem>
					<GenericListButtonLink
						navigateFn={() => navigate("/favorites")}
						primaryText={"Favorites"}
					/>
				</List>
			);
		}
	} else {
		return (
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate("/login")}>
						<ListItemIcon>
							<Avatar>
								<AccountCircle />
							</Avatar>
						</ListItemIcon>
						<ListItemText primary="Sign in" />
					</ListItemButton>
				</ListItem>
			</List>
		);
	}
};
