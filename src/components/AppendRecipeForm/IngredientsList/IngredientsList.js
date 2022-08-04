import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Fab,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import IngredientModal from "./IngredientModal";
import { useState } from "react";

export const IngredientsList = (props) => {
  const ingredientsArray = props.ingredientsArray;

  const [modalOpenStatus, setModalOpenStatus] = useState(false);

  const addIngredient = () => {
    setModalOpenStatus(true);
  };

  const removeIngredient = (ingredientID) => {
    props.removeIngredient(ingredientID);
  };

  return (
    <>
      <Typography variant="h4" component="div">
        Ingredients
      </Typography>
      <IngredientModal
        modalOpenStatus={modalOpenStatus}
        setModalOpenStatus={setModalOpenStatus}
        ingredientsArray={ingredientsArray}
        addIngredient={props.addIngredient}
      />
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
          onClick={() => addIngredient()}
        >
          <AddIcon />
        </Fab>
      </List>
    </>
  );
};
