import supabase from "../supabase";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipes-dev";

const getRecipeByID = async (id) => {
	let { data, error } = await supabase.from(table).select().eq("id", id);

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data[0];
	}
};

export default getRecipeByID;
