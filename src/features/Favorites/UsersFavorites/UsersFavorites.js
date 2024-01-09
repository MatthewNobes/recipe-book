import { RecipeList } from "components";
import { useEffect, useState } from "react";
import { getCurrentUsersFullFavorites } from "data";

export const UserFavorites = () => {
	const [favoriteRecipes, setFavoriteRecipes] = useState();

	useEffect(() => {
		const fetchRecipes = async () => {
			setFavoriteRecipes(await getCurrentUsersFullFavorites());
		};
		fetchRecipes();
	}, []);

	return <RecipeList recipes={favoriteRecipes} />;
};
