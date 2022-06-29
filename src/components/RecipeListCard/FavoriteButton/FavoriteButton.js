import { IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { setAsFavorite } from "./setAsFavorite";

export const FavoriteButton = (props) => {
  return (
    <IconButton aria-label="favorite" onClick={() => setAsFavorite(3)}>
      {props.isFavorite ? (
        <FavoriteOutlinedIcon />
      ) : (
        <FavoriteBorderOutlinedIcon />
      )}
    </IconButton>
  );
};
