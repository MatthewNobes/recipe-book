import supabase from "../../supabase";

/**
 * Used to sign a user out
 * @returns {string} Either the string 'error' or 'success'
 */
export const signOut = async () => {
	const { error } = await supabase.auth.signOut();
	if (error) {
		return "error";
	} else {
		return "success";
	}
};
