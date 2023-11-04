import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	isAdmin: false,
};

export const isAdminSlice = createSlice({
	name: "appearance",
	initialState,
	reducers: {
		setIsAdmin: (state, action) => {
			if (typeof action.payload === "boolean") {
				state.isAdmin = action.payload;
			}
		},
	},
});

export const { setIsAdmin } = isAdminSlice.actions;
export default isAdminSlice.reducer;
