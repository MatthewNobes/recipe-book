import { configureStore } from "@reduxjs/toolkit";
import { appearanceReducer, toastReducer } from "./slices";

export const store = configureStore({
	reducer: {
		appearance: appearanceReducer,
		toast: toastReducer,
	},
});
