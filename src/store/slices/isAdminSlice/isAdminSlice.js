import { createSlice } from "@reduxjs/toolkit";
import { isUserAppAdmin } from "data";

export const initialState = {
	isAdmin: await isUserAppAdmin(),
};

export const isAdminSlice = createSlice({
	name: "isAdmin",
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
