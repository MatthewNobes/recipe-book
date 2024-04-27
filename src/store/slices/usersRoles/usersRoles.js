import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersRoleNames } from "data";

export const fetchInitialData = createAsyncThunk(
	"usersRolesSlice/fetchInitialData",
	async () => {
		// Perform asynchronous operation to fetch initial data
		const response = await getUsersRoleNames();
		return response; // Assuming response.data contains the initial data
	},
);

// need to get the user id
export const initialState = {
	usersRoles: [],
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
