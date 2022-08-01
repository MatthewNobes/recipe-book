import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Fab,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export const IngredientsList = (props) => {
  const ingredientsArray = props.ingredientsArray;

  const removeIngredient = (ingredient) => {
    console.log(ingredient);
  };

  return (
    <>
      <Typography variant="h4" component="div">
        Ingredients
      </Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {ingredientsArray.map((ingredient) => {
          return (
            <ListItem
              key={ingredient.ingredient}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete ingredient"
                  onClick={() => removeIngredient(ingredient.ingredient)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemText
                  id={ingredient.ingredient}
                  primary={ingredient.ingredient}
                  secondary={ingredient.quantity + ingredient.measurement}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
        <Fab
          color="primary"
          size="small"
          aria-label="add"
          sx={{ float: "right", marginRight: "5px" }}
        >
          <AddIcon />
        </Fab>
      </List>
    </>
  );
};
