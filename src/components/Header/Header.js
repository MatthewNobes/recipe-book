import { Typography } from "@mui/material";
import css from "./Header.module.css";

export const Header = () => (
  <Typography component="h2" variant="h1" className={css.Header}>
    Recipe Book
  </Typography>
);
