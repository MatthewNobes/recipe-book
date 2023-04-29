import { Snackbar, Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setToast } from "../../store/slices/toastSlice/toastSlice";

export const ToastNotification = () => {
	const { message, alertType, isOpen } = useSelector(
		(state) => state.toast.toast,
	);

	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(setToast({ message: "", alertType: "success", isOpen: false }));
	};

	return (
		<Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
			<Alert severity={alertType} onClose={handleClose} sx={{ width: "100%" }}>
				{message}
			</Alert>
		</Snackbar>
	);
};
