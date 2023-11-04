import { configureStore } from "@reduxjs/toolkit";
import { appearanceReducer, toastReducer, isAdminReducer } from "./slices";

export const store = configureStore({
	reducer: {
		appearance: appearanceReducer,
		toast: toastReducer,
		isAdmin: isAdminReducer,
	},
});
