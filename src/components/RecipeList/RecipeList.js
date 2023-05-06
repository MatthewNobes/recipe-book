import { List } from "@mui/material";
import { Loading } from "../";
import RecipeListItem from "./RecipeListItem";
import PropTypes from "prop-types";

export const RecipeList = ({ recipes }) => {
	if (recipes.length) {
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
							isFavorite={false}
							cookTime={recipe.cook_time}
							prepTime={recipe.prep_time}
						/>
					);
				})}
			</List>
		);
	} else {
		return <Loading />;
	}
};

RecipeList.propTypes = {
	recipes: PropTypes.array,
};
