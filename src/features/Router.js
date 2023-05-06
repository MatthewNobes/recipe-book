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
import { Login } from "./Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setIsLoggedIn } from "../store/slices/isLoggedInSlice/isLoggedInSlice";
import supabase from "../data/supabase";

export const Router = () => {
	const dispatch = useDispatch();

	const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);

	useEffect(() => {
		const loggedInStatus = supabase.changedAccessToken ? true : false;
		dispatch(setIsLoggedIn(loggedInStatus));
	});
	return (
		<Routes>
			<Route path="/Login" element={<Login />} />
			<Route
				path="/add"
				element={isLoggedIn ? <AddRecipe /> : <Navigate to="/Login" />}
			/>
			<Route
				path="/edit/:recipeID"
				element={isLoggedIn ? <EditRecipe /> : <Navigate to="/Login" />}
			/>
			<Route path="/ViewRecipe/:recipeID" element={<ViewRecipe />} />
			<Route
				path="/Settings/Admin"
				element={isLoggedIn ? <Admin /> : <Navigate to="/Login" />}
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
