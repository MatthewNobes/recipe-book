import { Typography } from "@mui/material";
import css from "./Header.module.css";

export const Header = (props) => {
  const headerText = props.headerText;

  return (
    <Typography component="h2" variant="h1" className={css.Header}>
      {headerText}
    </Typography>
  );
};
