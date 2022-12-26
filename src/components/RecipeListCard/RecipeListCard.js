import { Typography, Box, Divider } from "@mui/material";
import ListItem from "@mui/material/ListItem";
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
    () => navigate("/ViewRecipe/" + id),
    [navigate, id]
  );

  return (
    <Box key={id}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={recipeName}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
              >
                {recipeDescription.slice(0, 50)}
              </Typography>
            </>
          }
          onClick={() => itemClickedOn()}
        />
        <TotalTime cookTime={cookTime} prepTime={prepTime} />
        <FavoriteButton isFavorite={isFavorite} />
      </ListItem>
      <Divider component="li" sx={{ marginX: 1 }} />
    </Box>
  );
};
