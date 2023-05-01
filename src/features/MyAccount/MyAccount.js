import { SubPageHeader, SignOutButton, LoginButton } from "../../components";

export const MyAccount = () => {
	return (
		<div>
			<SubPageHeader headerText="My Account" />
			<p>My Account in development</p>
			<LoginButton />
			<SignOutButton />
		</div>
	);
};
