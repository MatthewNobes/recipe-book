import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
} from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setToast } from "store/slices/toastSlice/toastSlice";
import { deleteCurrentUser } from "data";

export const DeleteAccountDialog = ({ isOpen, setIsOpen }) => {
	const handleClose = () => setIsOpen(false);
	const dispatch = useDispatch();

	const onDelete = async () => {
		const result = await deleteCurrentUser();

		if (result === "failed") {
			dispatch(
				setToast({
					message: "Unable to delete account",
					alertType: "error",
					isOpen: true,
				}),
			);
		} else {
			dispatch(
				setToast({
					message: "Account deleted",
					alertType: "success",
					isOpen: true,
				}),
			);
			handleClose();
		}
	};

	return (
		<Dialog
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="Delete account"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle color="error">{"Permanently delete account?"}</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Are you sure you want to delete you account? This action cannot be
					undone.
				</DialogContentText>
				<DialogContentText>
					This feature is still under development, if you currently wish to
					delete you account contact the system administrator.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>No</Button>
				<Button onClick={onDelete} autoFocus color="error" disabled>
					Yes
				</Button>
			</DialogActions>
		</Dialog>
	);
};

DeleteAccountDialog.propTypes = {
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func,
};
