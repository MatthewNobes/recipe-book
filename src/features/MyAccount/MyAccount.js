import { Button } from "@mui/material";
import { SubPageHeader } from "../../components";
import { signOut } from "../../data/signOut/signOut";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../store/slices/isLoggedInSlice/isLoggedInSlice";

export const MyAccount = () => {
	const dispatch = useDispatch();

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
						dispatch(setIsLoggedIn(false));
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
