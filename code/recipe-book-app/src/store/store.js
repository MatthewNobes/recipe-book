import { configureStore } from "@reduxjs/toolkit";
import { appearanceReducer } from "./slices";

export const store = configureStore({
	reducer: {
		appearance: appearanceReducer,
	},
});
