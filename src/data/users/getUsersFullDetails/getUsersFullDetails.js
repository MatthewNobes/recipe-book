import supabase from "data/supabase";

export const getUsersFullDetails = async (userID) => {
	const { data, error } = await supabase
		.from("users")
		.select("*")
		.eq("id", userID);

	if (error) {
		return { result: "failed", error: error };
	}
	if (data) {
		return { result: "success", data: data[0] };
	}
};
