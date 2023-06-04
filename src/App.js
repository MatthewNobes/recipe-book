import { Router } from "./features/Router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { generateTheme } from "./theme";
import { CacheProvider } from "@emotion/react";

import { Navigation, ToastNotification } from "./components";

const muiCache = createCache({
	key: "mui",
	prepend: true,
});

const App = () => {
	let userPreference = { isDarkMode: false };
	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
		userPreference.isDarkMode = true;
	}

	const theme = generateTheme(userPreference);

	return (
		<CacheProvider value={muiCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline enableColorScheme>
					<div>
						<Router />
						<Navigation />
						<ToastNotification />
					</div>
				</CssBaseline>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;
