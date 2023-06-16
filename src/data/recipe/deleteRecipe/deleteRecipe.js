import supabase from "../../supabase";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipes-dev";

export const deleteRecipe = async (id) => {
	const { error } = await supabase.from(table).delete().eq("id", id);

	if (error) {
		console.log(error);
		return "failed";
	} else {
		return "success";
	}
};
