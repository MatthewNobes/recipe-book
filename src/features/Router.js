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
import RecommendRecipe from "./RecommendRecipe";
import { UnitsAdmin } from "./Admin/UnitsAdmin/UnitsAdmin";
import Login from "./Login";
import supabase from "../data/supabase";
import PageNotFound from "./PageNotFound";
import { useEffect, useState } from "react";
import { isUserAppAdmin } from "data";
import { useDispatch, useSelector } from "react-redux";
import { setIsAdmin } from "store/slices/isAdminSlice/isAdminSlice";

export const Router = () => {
	const [loggedIn, setLoggedIn] = useState(
		supabase.changedAccessToken ? true : false,
	);

	const isAdmin = useSelector((state) => state.isAdmin.isAdmin);
	const dispatch = useDispatch();

	supabase.auth.onAuthStateChange((event, session) => {
		if (session) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	});

	useEffect(() => {
		const getIsAdmin = async () => {
			dispatch(setIsAdmin(await isUserAppAdmin()));
		};
		getIsAdmin();
	}, []);

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
				path="/Admin"
				element={isAdmin ? <Admin /> : <Navigate to="/Home" />}
			/>
			<Route
				path="/Admin/UnitsAdmin"
				element={isAdmin ? <UnitsAdmin /> : <Navigate to="/Home" />}
			/>
			<Route path="/Settings/About" element={<About />} />
			<Route path="/RecommendRecipe" element={<RecommendRecipe />} />
			<Route path="/Settings" element={<Settings />} />
			<Route path="/Settings/MyAccount" element={<MyAccount />} />
			<Route path="/Favorites" element={<Favorites />} />
			<Route path="/Categories" element={<Categories />} />
			<Route path="/browse" element={<BrowseRecipes />} />
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};
