import { Button } from "@mui/material";
import { SubPageHeader } from "../../components";
import { signOut } from "../../data/signOut/signOut";

export const MyAccount = () => {
	return (
		<div>
			<SubPageHeader headerText="My Account" />
			<p>My Account in development</p>
			<Button
				onClick={async () => {
					const result = await signOut();
					console.log(result);
					if (result === "success") {
						console.log("signed out");
					} else {
						console.log("error signing out");
					}
				}}
			>
				Sign out
			</Button>
		</div>
	);
};
