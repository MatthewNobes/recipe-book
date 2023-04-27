import supabase from "../supabase";

const deleteRecipe = async (id) => {
	const { error } = await supabase.from("recipes").delete().eq("id", id);

	if (error) {
		console.log(error);
		return "failed";
	} else {
		return "success";
	}
};

export default deleteRecipe;
