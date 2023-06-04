import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Home";
import BrowseRecipes from "./BrowseRecipes";
import MyAccount from "./MyAccount";
import Favorites from "./Favorites";
import AddRecipe from "./AddRecipe";
import Settings from "./Settings";
import Admin from "./Admin";
import About from "./About";
import ViewRecipe from "./ViewRecipe";
import EditRecipe from "./EditRecipe";
import Categories from "./Categories";
import Category from "./Category";
import { UnitsAdmin } from "./Admin/UnitsAdmin/UnitsAdmin";
import Login from "./Login";
import supabase from "../data/supabase";
import PageNotFound from "./PageNotFound";
import { useState } from "react";

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

	return (
		<Routes>
			<Route path="*" element={<PageNotFound />} />
			<Route path="/Login" element={<Login />} />
			<Route
				path="/add"
				element={loggedIn ? <AddRecipe /> : <Navigate to="/Login" />}
			/>
			<Route
				path="/edit/:recipeID"
				element={loggedIn ? <EditRecipe /> : <Navigate to="/Login" />}
			/>
			<Route path="/category/:category" element={<Category />} />
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
			<Route path="/Settings" element={<Settings />} />
			<Route path="/Settings/MyAccount" element={<MyAccount />} />
			<Route path="/Favorites" element={<Favorites />} />
			<Route path="/Categories" element={<Categories />} />
			<Route path="/browse" element={<BrowseRecipes />} />
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};
