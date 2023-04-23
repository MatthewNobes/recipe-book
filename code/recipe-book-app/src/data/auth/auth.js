/* eslint-disable no-unused-vars */
import supabase from "../supabase";

// will need a proper login system soon
export const auth = async () => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: process.env.REACT_APP_SUPABASE_EMAIL,
		password: process.env.REACT_APP_SUPABASE_WD,
	});
};
