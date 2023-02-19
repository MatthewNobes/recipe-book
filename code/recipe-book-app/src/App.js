import Router from "./components/Router";
import Navigation from "./components/Navigation";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import createCache from "@emotion/cache";
import { generateTheme } from "./theme";
import { CacheProvider } from "@emotion/react";

const muiCache = createCache({
	key: "mui",
	prepend: true,
});

const App = () => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const theme = generateTheme(prefersDarkMode);
	return (
		<CacheProvider value={muiCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline enableColorScheme>
					<div>
						<Router />
						<Navigation />
					</div>
				</CssBaseline>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;
