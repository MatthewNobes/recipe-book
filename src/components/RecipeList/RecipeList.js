import { List } from "@mui/material";
import RecipeListItem from "./RecipeListItem";
import PropTypes from "prop-types";

/**
 * Generates a list of recipes using the list supplied.
 * @param {Array} recipes The array of recipes to display
 * @returns {React.ReactElement} A list of recipes
 */
export const RecipeList = ({ recipes }) => {
	return (
		<List
			sx={{
				width: "100%",
				minWidth: 360,
				bgcolor: "background.paper",
			}}
		>
			{recipes.map((recipe) => {
				return (
					<RecipeListItem
						key={recipe.id}
						id={recipe.id}
						recipeName={recipe.name}
						recipeDescription={recipe.description}
						isFavorite={"isFavorite" in recipe ? recipe.isFavorite : null}
						cookTime={recipe.cookTime}
						prepTime={recipe.prepTime}
						image={recipe.images[0]}
						category={recipe.category}
					/>
				);
			})}
		</List>
	);
};

RecipeList.propTypes = {
	recipes: PropTypes.array,
};
