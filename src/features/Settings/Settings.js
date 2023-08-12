import Header from "../../components/Header";
import { Divider } from "@mui/material";
import { Info, Security } from "@mui/icons-material";

import { Footer, IconList, Page } from "../../components";
import { AccountItem } from "./AccountItem/AccountItem";

export const Settings = () => {
	const options = [
		{ label: "Admin", route: "/Settings/Admin", icon: <Security /> },
		{ label: "About", route: "/Settings/About", icon: <Info /> },
	];

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
