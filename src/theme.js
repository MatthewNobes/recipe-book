import { createTheme } from "@mui/material";

export const generateTheme = (appearance) => {
	const themeObject = {
		palette: {
			mode: appearance.isDarkMode === true ? "dark" : "light",
			primary: {
				main: "#00BEFA",
				dark: "#015FEA",
			},
			secondary: {
				main: "#f50057",
			},
		},
		typography: {
			fontSize: appearance.fontSize,
		},
	};

	const theme = createTheme(themeObject);
	return theme;
};
