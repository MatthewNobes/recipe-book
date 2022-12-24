import {
  Box,
  List,
  ListItem,
  Typography,
  Divider,
  ListItemText,
} from "@mui/material";

const Header = () => <Typography variant="h4">Ingredients</Typography>;

export const ViewIngredients = ({ ingredients = [] }) => {
  const hasIngredients = ingredients.length === 0 ? false : true;

  if (hasIngredients === true) {
    return (
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Header />
        <List>
          {ingredients.map((ingredient) => {
            return (
              <Box>
                <ListItem disablePadding>
                  <ListItemText variant="body1">
                    {ingredient.quantity} {ingredient.measurement}{" "}
                    {ingredient.ingredient}
                  </ListItemText>
                </ListItem>
                <Divider />
              </Box>
            );
          })}
        </List>
      </Box>
    );
  } else {
    return (
      <Box>
        <Header />
        <Typography variant="body1">
          No ingredients exists for this recipe
        </Typography>
      </Box>
    );
  }
};
