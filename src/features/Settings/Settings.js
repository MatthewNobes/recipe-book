import Header from "../../components/Header";
import { List, Divider } from "@mui/material";
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
			<List>
				<AccountItem />
			</List>
			<Divider />

			<IconList options={options} />
			<Divider />
			<Footer />
		</Page>
	);
};
