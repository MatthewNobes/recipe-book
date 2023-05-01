import { Button } from "@mui/material";
import { signOut } from "../../data/signOut/signOut";
import { setToast } from "../../store/slices/toastSlice/toastSlice";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../store/slices/isLoggedInSlice/isLoggedInSlice";

export const SignOutButton = () => {
	const dispatch = useDispatch();

	return (
		<Button
			onClick={async () => {
				const result = await signOut();
				if (result === "success") {
					dispatch(
						setToast({
							message: "Logged out",
							alertType: "success",
							isOpen: true,
						}),
					);
					dispatch(setIsLoggedIn(false));
				} else {
					dispatch(
						setToast({
							message: "Failed to log out",
							alertType: "error",
							isOpen: true,
						}),
					);
				}
			}}
		>
			Sign out
		</Button>
	);
};
