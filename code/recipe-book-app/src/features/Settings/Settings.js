import Header from "../../components/Header";
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Divider,
	Typography,
	Box,
} from "@mui/material";
import { AccountCircle, Info, Security, Tune } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const FooterComponent = () => {
	return (
		<Box sx={{ textAlign: "center", marginTop: 2 }}>
			<Typography variant="body2">
				Matt Nobes {new Date().getFullYear()}
			</Typography>
		</Box>
	);
};

export const Settings = () => {
	const navigate = useNavigate();

	// This will eventually be populated from state of the current user
	const isAdmin = true;

	const options = [
		{ label: "Admin", route: "/Admin", icon: <Security /> },
		{ label: "Appearance", route: "/Appearance", icon: <Tune /> },
		{ label: "About", route: "/About", icon: <Info /> },
	];

	return (
		<Box>
			<Header headerText="Settings" />
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate("/Settings/MyAccount")}>
						<ListItemIcon>
							<AccountCircle />
						</ListItemIcon>
						<ListItemText primary="Account name will go here" />
					</ListItemButton>
				</ListItem>
			</List>
			<Divider />

			<List>
				{options.map((item, index) => {
					if (item.label === "Admin" && isAdmin === false) {
						return <></>;
					} else {
						return (
							<Box key={index}>
								<ListItem disablePadding>
									<ListItemButton
										onClick={() => navigate("/Settings" + item.route)}
									>
										<ListItemIcon>{item.icon}</ListItemIcon>
										<ListItemText primary={item.label} />
									</ListItemButton>
								</ListItem>
							</Box>
						);
					}
				})}
			</List>
			<Divider />
			<FooterComponent />
		</Box>
	);
};
