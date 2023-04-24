import { Routes, Route } from "react-router-dom";
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
