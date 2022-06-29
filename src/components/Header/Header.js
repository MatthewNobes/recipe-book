import { Typography } from "@mui/material";
import css from "./Header.module.css";

export const Header = (props) => {
  const headerText = props.headerText;

  return (
    <Typography
      component="h1"
      variant="h2"
      className={css.Header}
      sx={{ bgcolor: "#1976d2" }}
    >
      {headerText}
    </Typography>
  );
};
