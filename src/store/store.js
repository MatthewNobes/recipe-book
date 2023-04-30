import { configureStore } from "@reduxjs/toolkit";
import { appearanceReducer, toastReducer, isLoggedInReducer } from "./slices";

export const store = configureStore({
	reducer: {
		appearance: appearanceReducer,
		toast: toastReducer,
		isLoggedIn: isLoggedInReducer,
	},
});
