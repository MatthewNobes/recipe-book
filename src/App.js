import { Router } from "./features/Router";
import Navigation from "./components/Navigation";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { generateTheme } from "./theme";
import { CacheProvider } from "@emotion/react";
import { useSelector } from "react-redux";

const muiCache = createCache({
	key: "mui",
	prepend: true,
});

const App = () => {
	const userPreference = useSelector((state) => state.appearance.appearance);
	const theme = generateTheme(userPreference);

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