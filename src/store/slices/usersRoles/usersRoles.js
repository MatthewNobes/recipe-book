import { createSlice } from "@reduxjs/toolkit";
import { getUsersRoleNames } from "data";

// need to get the user id
export const initialState = {
	usersRoles: await getUsersRoleNames(),
};

export const usersRolesSlice = createSlice({
	name: "usersRoles",
	initialState,
	reducers: {
		setUsersRoles: (state, action) => {
			if (
				typeof action.payload === "object" ||
				typeof action.payload === "boolean"
			) {
				state.usersRoles = action.payload;
			}
		},
	},
});

export const { setUsersRoles } = usersRolesSlice.actions;
export default usersRolesSlice.reducer;
