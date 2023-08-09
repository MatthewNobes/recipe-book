import { addFavorite } from "../addFavorite/addFavorite";
import { removeFavorite } from "../removeFavorite/removeFavorite";
import { getCurrentUser } from "data/authentication/getCurrentUser/getCurrentUser";
import { getFavoriteStatus } from "../getFavoriteStatus/getFavoriteStatus";

/**
 * Toggles the favorite status of a recipe.
 * @param {Integer} recipeID The recipe ID of the recipe to toggle favorite of
 * @returns {Boolean} Either true if the operation has succeeded or false if it failed.
 */
export const toggleFavorite = async (recipeID) => {
	const userID = (await getCurrentUser()).id;
	const isFavorite = await getFavoriteStatus(recipeID, userID);

	if (userID && isFavorite) {
		const favorite = isFavorite.data
			? await removeFavorite(recipeID, userID)
			: await addFavorite(recipeID, userID);
		if (favorite) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};
