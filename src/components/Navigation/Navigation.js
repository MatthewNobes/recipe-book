import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
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
      <BottomNavigationAction
        label="Browse Recipes"
        icon={<AccountBalanceIcon />}
      />
      <BottomNavigationAction label="Favorites" icon={<AccountBalanceIcon />} />
      <BottomNavigationAction
        label="My Cupboards"
        icon={<AccountBalanceIcon />}
      />
      <BottomNavigationAction
        label="My Account"
        icon={<AccountBalanceIcon />}
      />
    </BottomNavigation>
  );
};
