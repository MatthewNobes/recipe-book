import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CountertopsIcon from "@mui/icons-material/Countertops";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
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
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/BrowseRecipes"
        label="Browse"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/Favorites"
        label="Favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/MyAccount"
        label="My Account"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
};
