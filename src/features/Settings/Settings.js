import Header from "../../components/Header";
import { Divider } from "@mui/material";
import { Info, Security } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Footer, IconList, Page } from "../../components";
import { AccountItem } from "./AccountItem/AccountItem";
import { useEffect, useState } from "react";

export const Settings = () => {
	const [options, setOptions] = useState([]);
	const usersRoles = useSelector((state) => state.usersRoles.usersRoles);

	const isLoggedIn = usersRoles !== false ? true : false;
	const isAdmin = isLoggedIn ? usersRoles.includes("App Admin") : false;

	useEffect(() => {
		const buildSettingsOptions = (isAdmin) => {
			const options = [
				{ label: "About", route: "/Settings/About", icon: <Info /> },
			];
			if (isAdmin) {
				options.unshift({
					label: "Admin",
					route: "/Admin",
					icon: <Security />,
				});
			}
			setOptions(options);
		};
		buildSettingsOptions(isAdmin);
	}, [isAdmin]);

	return (
		<Page>
			<Header headerText="Settings" />

			<AccountItem />

			<Divider />

			<IconList options={options} />
			<Divider />
			<Footer />
		</Page>
	);
};
