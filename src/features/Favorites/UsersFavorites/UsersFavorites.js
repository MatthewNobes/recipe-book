import { Typography } from "@mui/material";
import { Loading, RecipeList } from "components";
import { useEffect, useState } from "react";
import { getCurrentUsersFullFavorites } from "data";

export const UserFavorites = () => {
	const [favoriteRecipes, setFavoriteRecipes] = useState();

	useEffect(() => {
		const fetchRecipes = async () => {
			const foundRecipes = await getCurrentUsersFullFavorites();
			setFavoriteRecipes(foundRecipes);
		};
		fetchRecipes();
	}, []);

	if (favoriteRecipes) {
		if (favoriteRecipes.length > 0) {
			return <RecipeList recipes={favoriteRecipes} />;
		} else {
			return (
				<Typography variant="body1" sx={{ textAlign: "center", py: 3 }}>
					No favorites found
				</Typography>
			);
		}
	} else {
		return <Loading />;
	}
};
