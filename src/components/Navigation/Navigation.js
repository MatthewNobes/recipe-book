import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Settings, Favorite, Search, Home } from "@mui/icons-material";
import { useState } from "react";
import css from "./Navigation.module.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
	const [value, setValue] = useState(0);
	return (
		<BottomNavigation
			className={css.Navigation}
			showLabels
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		>
			<BottomNavigationAction
				component={Link}
				to="/"
				label="Home"
				icon={<Home />}
			/>
			<BottomNavigationAction
				component={Link}
				to="/BrowseRecipes"
				label="Browse"
				icon={<Search />}
			/>
			<BottomNavigationAction
				component={Link}
				to="/Favorites"
				label="Favorites"
				icon={<Favorite />}
			/>
			<BottomNavigationAction
				component={Link}
				to="/Settings"
				label="Settings"
				icon={<Settings />}
			/>
		</BottomNavigation>
	);
};
