import {
	SubPageHeader,
	SignOutButton,
	LoginButton,
	Page,
} from "../../components";

export const MyAccount = () => {
	return (
		<>
			<SubPageHeader headerText="My Account" />
			<Page>
				<p>My Account in development</p>
				<LoginButton />
				<SignOutButton />
			</Page>
		</>
	);
};
