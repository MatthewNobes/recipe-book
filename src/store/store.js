import { configureStore } from "@reduxjs/toolkit";
import { appearanceReducer, toastReducer, filtersReducer } from "./slices";

export const store = configureStore({
	reducer: {
		appearance: appearanceReducer,
		toast: toastReducer,
		filters: filtersReducer,
	},
});
