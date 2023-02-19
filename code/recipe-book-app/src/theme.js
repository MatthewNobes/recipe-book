import { createTheme } from "@mui/material";

export const generateTheme = (isDarkMode) => {
	const themeObject = {
		palette: {
			mode: isDarkMode === true ? "dark" : "light",
			primary: {
				main: "#00BEFA",
				dark: "#015FEA",
			},
			secondary: {
				main: "#f50057",
			},
		},
	};

	const theme = createTheme(themeObject);
	return theme;
};
