import { List, Typography } from "@mui/material";
import RecipeListItem from "./RecipeListItem";
import PropTypes from "prop-types";

/**
 * Generates a list of recipes using the list supplied.
 * @param {Array} recipes The array of recipes to display
 * @returns {React.ReactElement} A list of recipes
 */
export const RecipeList = ({ recipes }) => {
	const commonRecipeListStyle = {
		width: "100%",
		minWidth: 360,
		bgcolor: "background.paper",
	};
	if (recipes) {
		if (recipes.length > 0) {
			return (
				<List sx={commonRecipeListStyle}>
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
								isLoading={false}
							/>
						);
					})}
				</List>
			);
		} else {
			return (
				<Typography sx={{ textAlign: "center", marginTop: 1 }}>
					No recipes found
				</Typography>
			);
		}
	} else {
		return (
			<List sx={commonRecipeListStyle}>
				<RecipeListItem isLoading={true} />
				<RecipeListItem isLoading={true} />
				<RecipeListItem isLoading={true} />
			</List>
		);
	}
};

RecipeList.propTypes = {
	recipes: PropTypes.array,
};
