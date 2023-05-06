import supabase from "../supabase";

const getRecipeByID = async (id) => {
	let { data, error } = await supabase
		.from("recipes-dev")
		.select()
		.eq("id", id);

	if (error) {
		console.log(error);
		return undefined;
	}
	if (data) {
		return data[0];
	}
};

export default getRecipeByID;
