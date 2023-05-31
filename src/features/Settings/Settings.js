import Header from "../../components/Header";
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Divider,
} from "@mui/material";
import { AccountCircle, Info, Security } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Footer, IconList, Page } from "../../components";

export const Settings = () => {
	const navigate = useNavigate();

	const options = [
		{ label: "Admin", route: "/Settings/Admin", icon: <Security /> },
		{ label: "About", route: "/Settings/About", icon: <Info /> },
	];

	return (
		<Page>
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

			<IconList options={options} />
			<Divider />
			<Footer />
		</Page>
	);
};
