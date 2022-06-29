import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import FavoriteButton from "./FavoriteButton";

export const RecipeListCard = (props) => {
  const { id, recipeName, recipeDescription, isFavorite, totalTime } = props;

  return (
    <div key={id}>
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
                {recipeDescription}
              </Typography>
              {totalTime}
            </>
          }
        />
        <FavoriteButton isFavorite={isFavorite} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};
