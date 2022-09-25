import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import FavoriteButton from "./FavoriteButton";
import TotalTime from "./TotalTime";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const RecipeListCard = (props) => {
  const { id, recipeName, recipeDescription, isFavorite, cookTime, prepTime } =
    props;
  const navigate = useNavigate();

  const itemClickedOn = useCallback(
    () => navigate("/ViewRecipe", { replace: true }),
    [navigate]
  );

  return (
    <div key={id}>
      <ListItem alignItems="flex-start" onClick={() => itemClickedOn()}>
        <ListItemText
          primary={recipeName}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
              >
                {recipeDescription}
              </Typography>
            </>
          }
        />
        <TotalTime cookTime={cookTime} prepTime={prepTime} />
        <FavoriteButton isFavorite={isFavorite} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};
