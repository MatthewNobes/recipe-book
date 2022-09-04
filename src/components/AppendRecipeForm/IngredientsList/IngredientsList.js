import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddIngredient } from "./AddIngredient";

export const IngredientsList = (props) => {
  const ingredientsArray = props.ingredientsArray;

  const removeIngredient = (ingredientID) => {
    props.removeIngredient(ingredientID);
  };

  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {ingredientsArray.map((ingredient) => {
          return (
            <ListItem
              key={ingredient.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete ingredient"
                  onClick={() => removeIngredient(ingredient.id)}
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
                  secondary={ingredient.quantity + " " + ingredient.measurement}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem>
          <AddIngredient
            ingredientsArray={ingredientsArray}
            addIngredient={props.addIngredient}
          />
        </ListItem>
      </List>
    </>
  );
};
