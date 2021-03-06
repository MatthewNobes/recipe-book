import { Routes, Route } from "react-router-dom";
import HomePage from "../../features/Home";
import BrowseRecipes from "../../features/BrowseRecipes";
import MyAccount from "../../features/MyAccount";
import Favorites from "../../features/Favorites";
import AddRecipe from "../../features/AddRecipe";

export const Router = () => (
  <Routes>
    <Route path="/AddRecipe" element={<AddRecipe />} />
    <Route path="/MyAccount" element={<MyAccount />} />
    <Route path="/Favorites" element={<Favorites />} />
    <Route path="/BrowseRecipes" element={<BrowseRecipes />} />
    <Route path="/" element={<HomePage />} />
  </Routes>
);
