import {
	addRecipe,
	deleteRecipe,
	getAllRecipes,
	getFilteredRecipes,
	getRecipeByID,
	updateRecipe,
	getRecipesByCategoryName,
	removeKeywordFromRecipe,
	addKeyword,
} from "./recipe";
import { auth, signOut, isUserAppAdmin, getUserRoles } from "./authentication";
import { addUnit, getAllUnits, deleteUnit } from "./unit";
import { getAllCategories } from "./categories";
import { getAllCountries } from "./countries";
import {
	getCurrentUsersFavorites,
	getCurrentUsersFullFavorites,
	toggleFavorite,
	addFavorite,
	removeFavorite,
} from "./Favorites";
import { getAllRegions } from "./regions";
import {
	getUsersWithRoles,
	removeUsersRole,
	getUsersFullDetails,
} from "./users";
import {
	getAllRoles,
	addRole,
	updateRole,
	grantUserRole,
	getUsersRoleNames,
} from "./roles";
import supabase from "./supabase";
export {
	addRecipe,
	addUnit,
	updateRole,
	grantUserRole,
	getUsersWithRoles,
	getUsersRoleNames,
	removeUsersRole,
	auth,
	addKeyword,
	removeKeywordFromRecipe,
	deleteRecipe,
	deleteUnit,
	getAllRecipes,
	isUserAppAdmin,
	getFilteredRecipes,
	getRecipeByID,
	getAllCountries,
	getAllRegions,
	getAllCategories,
	getAllUnits,
	updateRecipe,
	getRecipesByCategoryName,
	getCurrentUsersFullFavorites,
	getUserRoles,
	signOut,
	getCurrentUsersFavorites,
	toggleFavorite,
	addFavorite,
	removeFavorite,
	getAllRoles,
	addRole,
	getUsersFullDetails,
	supabase,
};
