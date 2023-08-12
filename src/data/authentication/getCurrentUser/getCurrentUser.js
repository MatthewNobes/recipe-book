import supabase from "../../supabase";

/**
 * Used to find the details of the currently logged in user, including their id
 * @returns {object | null} Either an object containing the users login details or null if there is no logged in user
 */
export const getCurrentUser = async () => {
	const {
		data: { user },
	} = await supabase.auth.getUser();
	return user;
};
