import { Routes, Route } from "react-router-dom";
import HomePage from "../../features/Home";
import BrowseRecipes from "../../features/BrowseRecipes";
import MyAccount from "../../features/MyAccount";
import Favorites from "../../features/Favorites";
import AddRecipe from "../../features/AddRecipe";
import Settings from "../../features/Settings";
import Admin from "../../features/Admin";
import Appearance from "../../features/Appearance";
import About from "../../features/About";
import ViewRecipe from "../ViewRecipe";

export const Router = () => (
	<Routes>
		<Route path="/addRecipe" element={<AddRecipe />} />
		<Route path="/ViewRecipe/:recipeID" element={<ViewRecipe />} />
		<Route path="/Settings/Admin" element={<Admin />} />
		<Route path="/Settings/About" element={<About />} />
		<Route path="/Settings/Appearance" element={<Appearance />} />
		<Route path="/Settings" element={<Settings />} />
		<Route path="/Settings/MyAccount" element={<MyAccount />} />
		<Route path="/Favorites" element={<Favorites />} />
		<Route path="/BrowseRecipes" element={<BrowseRecipes />} />
		<Route path="/" element={<HomePage />} />
	</Routes>
);
