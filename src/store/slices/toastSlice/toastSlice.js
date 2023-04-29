import { createSlice } from "@reduxjs/toolkit";

// types error, success, info, warning
export const initialState = {
	toast: { message: "Hello world", alertType: "success", isOpen: false },
};

const validAlertTypes = ["error", "success", "info", "warning"];

export const toastSlice = createSlice({
	name: "toast",
	initialState,
	reducers: {
		setToast: (state, action) => {
			if (validAlertTypes.includes(action.payload.alertType)) {
				state.toast = {
					message: action.payload.message,
					alertType: action.payload.alertType,
					isOpen: action.payload.isOpen,
				};
			}
		},
	},
});

export const { setToast, setIsDarkMode } = toastSlice.actions;
export default toastSlice.reducer;
