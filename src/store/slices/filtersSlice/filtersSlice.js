import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	filters: {
		country: "",
		difficulty: "",
		totalTime: "",
	},
};

export const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setFilters: (state, action) => {
			if (typeof action.payload === "object") {
				state.filters = action.payload;
			}
		},
	},
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
