import { AccountCircle } from "@mui/icons-material";
import {
	ListItemIcon,
	ListItemText,
	ListItem,
	ListItemButton,
	Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../../../data/supabase";
import { getWelcomeMessage } from "../../../utils";

export const AccountItem = () => {
	const navigate = useNavigate();

	const [loggedIn, setLoggedIn] = useState(
		supabase.changedAccessToken ? true : false,
	);
	const [currentUser, setCurrentUser] = useState();

	supabase.auth.onAuthStateChange((event, session) => {
		if (session) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	});

	if (loggedIn) {
		useEffect(() => {
			const getCurrentUser = async () => {
				const {
					data: { user },
				} = await supabase.auth.getUser();
				setCurrentUser(user);
			};
			getCurrentUser();
		}, []);
		if (currentUser) {
			const today = new Date();
			const time = today.getHours();

			return (
				<ListItem>
					<ListItemButton onClick={() => navigate("/Settings/MyAccount")}>
						<ListItemIcon>
							<Avatar>{currentUser.email.charAt(0).toUpperCase()}</Avatar>
						</ListItemIcon>
						<ListItemText
							primary={getWelcomeMessage(time)}
							secondary={"Logged in as " + currentUser.email}
						/>
					</ListItemButton>
				</ListItem>
			);
		}
	} else {
		return (
			<ListItem>
				<ListItemButton onClick={() => navigate("/Login")}>
					<ListItemIcon>
						<Avatar>
							<AccountCircle />
						</Avatar>
					</ListItemIcon>
					<ListItemText primary="Sign in" />
				</ListItemButton>
			</ListItem>
		);
	}
};
