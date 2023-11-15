import { configureStore } from "@reduxjs/toolkit";
import { appearanceReducer, toastReducer, userRolesReducer } from "./slices";

export const store = configureStore({
	reducer: {
		appearance: appearanceReducer,
		toast: toastReducer,
		usersRoles: userRolesReducer,
	},
});
