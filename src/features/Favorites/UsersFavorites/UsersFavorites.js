import { Typography } from "@mui/material";
import { Loading, RecipeList } from "components";
import { useEffect, useState } from "react";
import { getAllRecipes } from "data";

export const UserFavorites = () => {
	const [favoriteRecipes, setFavoriteRecipes] = useState();

	useEffect(() => {
		const fetchRecipes = async () => {
			const foundRecipes = await getAllRecipes();
			setFavoriteRecipes(foundRecipes.data);
		};
		fetchRecipes();
	}, []);

	if (favoriteRecipes) {
		if (favoriteRecipes.length > 0) {
			return <RecipeList recipes={favoriteRecipes} />;
		} else {
			return <Typography variant="body1">No recipes found</Typography>;
		}
	} else {
		return <Loading />;
	}
};
