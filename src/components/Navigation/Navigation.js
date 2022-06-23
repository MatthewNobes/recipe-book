import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CountertopsIcon from "@mui/icons-material/Countertops";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import css from "./Navigation.module.css";

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
      <BottomNavigationAction label="Browse Recipes" icon={<SearchIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="My Cupboards" icon={<CountertopsIcon />} />
      <BottomNavigationAction label="My Account" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
};
