import { configureStore } from "@reduxjs/toolkit";
import {
	appearanceReducer,
	toastReducer,
	isAdminReducer,
	userRolesReducer,
} from "./slices";

export const store = configureStore({
	reducer: {
		appearance: appearanceReducer,
		toast: toastReducer,
		isAdmin: isAdminReducer,
		usersRoles: userRolesReducer,
	},
});
