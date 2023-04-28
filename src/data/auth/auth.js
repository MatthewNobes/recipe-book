/* eslint-disable no-unused-vars */
import supabase from "../supabase";

// will need a proper login system soon
const auth = async () => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: process.env.REACT_APP_SUPABASE_EMAIL,
		password: process.env.REACT_APP_SUPABASE_WD,
	});
	if (error) {
		console.log(error);
	} else {
		console.log(data);
	}
};

export default auth;
