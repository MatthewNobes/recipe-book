import { Typography, Box, Divider, Tooltip } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FavoriteButton from "./FavoriteButton";
import TotalTime from "./TotalTime";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { makeSecondaryText } from "../../utils";

export const RecipeListCard = (props) => {
  const { id, recipeName, recipeDescription, isFavorite, cookTime, prepTime } =
    props;
  const navigate = useNavigate();

  const itemClickedOn = useCallback(
    () => navigate("/ViewRecipe/" + id),
    [navigate, id]
  );

  const cutDownDescription = makeSecondaryText(recipeDescription);

  return (
    <Box key={id}>
      <ListItem alignItems="flex-start">
        <Tooltip title={recipeName + " - " + recipeDescription}>
          <ListItemText
            primary={recipeName}
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                >
                  {cutDownDescription}
                </Typography>
              </>
            }
            onClick={() => itemClickedOn()}
          />
        </Tooltip>
        <TotalTime cookTime={cookTime} prepTime={prepTime} />
        <FavoriteButton isFavorite={isFavorite} />
      </ListItem>
      <Divider component="li" sx={{ marginX: 1 }} />
    </Box>
  );
};
