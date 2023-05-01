import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../../data/supabase";

const getInitialState = () => {
	const isLoggedIn = supabase.changedAccessToken ? true : false;
	return { isLoggedIn: isLoggedIn };
};

export const initialState = getInitialState();

export const isLoggedInSlice = createSlice({
	name: "isLoggedIn",
	initialState,
	reducers: {
		setIsLoggedIn: (state, action) => {
			if (typeof action.payload === "boolean") {
				state.isLoggedIn = action.payload;
			}
		},
	},
});

export const { setIsLoggedIn } = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;
