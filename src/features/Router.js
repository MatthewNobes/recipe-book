import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Home";
import BrowseRecipes from "./BrowseRecipes";
import MyAccount from "./MyAccount";
import Favorites from "./Favorites";
import AddRecipe from "./AddRecipe";
import Settings from "./Settings";
import Admin from "./Admin";
import Appearance from "./Appearance";
import About from "./About";
import ViewRecipe from "./ViewRecipe";
import EditRecipe from "./EditRecipe";
import { UnitsAdmin } from "./Admin/UnitsAdmin/UnitsAdmin";
import { Login } from "./Login/Login";
import { useEffect, useState } from "react";
import supabase from "../data/supabase";

export const Router = () => {
	const [loggedIn, setLoggedIn] = useState(
		supabase.changedAccessToken ? true : false,
	);

	supabase.auth.onAuthStateChange((event, session) => {
		if (session) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	});

	useEffect(() => {});
	return (
		<Routes>
			<Route path="/Login" element={<Login />} />
			<Route
				path="/add"
				element={loggedIn ? <AddRecipe /> : <Navigate to="/Login" />}
			/>
			<Route
				path="/edit/:recipeID"
				element={loggedIn ? <EditRecipe /> : <Navigate to="/Login" />}
			/>
			<Route path="/ViewRecipe/:recipeID" element={<ViewRecipe />} />
			<Route
				path="/Settings/Admin"
				element={loggedIn ? <Admin /> : <Navigate to="/Login" />}
			/>
			<Route
				path="/Settings/Admin/UnitsAdmin"
				element={loggedIn ? <UnitsAdmin /> : <Navigate to="/Login" />}
			/>
			<Route path="/Settings/About" element={<About />} />
			<Route path="/Settings/Appearance" element={<Appearance />} />
			<Route path="/Settings" element={<Settings />} />
			<Route path="/Settings/MyAccount" element={<MyAccount />} />
			<Route path="/Favorites" element={<Favorites />} />
			<Route path="/BrowseRecipes" element={<BrowseRecipes />} />
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};
