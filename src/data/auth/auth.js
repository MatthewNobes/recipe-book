import supabase from "../supabase";

/**
 * Used to authenticate a user with their username and password
 * @param {string} email the email to login with
 * @param {string} password the password to login with
 * @returns Either "error" or the session token, depending on the result of the login
 */
const auth = async (email, password) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password,
	});
	if (error) {
		return "error";
	} else {
		return data.session.access_token;
	}
};

export default auth;
