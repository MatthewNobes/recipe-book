import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	appearance: { fontSize: 14, isDarkMode: false },
};

export const appearanceSlice = createSlice({
	name: "appearance",
	initialState,
	reducers: {
		setFontSize: (state, action) => {
			if (Number.isInteger(action.payload)) {
				state.appearance = {
					fontSize: action.payload,
					isDarkMode: state.appearance.isDarkMode,
				};
			}
		},
		setIsDarkMode: (state, action) => {
			if (typeof action.payload === "boolean") {
				state.appearance = {
					fontSize: state.appearance.fontSize,
					isDarkMode: action.payload,
				};
			}
		},
	},
});

export const { setFontSize, setIsDarkMode } = appearanceSlice.actions;
export default appearanceSlice.reducer;
