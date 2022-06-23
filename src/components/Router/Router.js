import { Routes, Route } from "react-router-dom";
import HomePage from "../../features/Home";
import BrowseRecipes from "../../features/BrowseRecipes";

export const Router = () => (
  <Routes>
    <Route path="/MyAccount" element={<HomePage />} />
    <Route path="/MyCupboards" element={<HomePage />} />
    <Route path="/Favorites" element={<HomePage />} />
    <Route path="/BrowseRecipes" element={<BrowseRecipes />} />
    <Route path="/" element={<HomePage />} />
  </Routes>
);
