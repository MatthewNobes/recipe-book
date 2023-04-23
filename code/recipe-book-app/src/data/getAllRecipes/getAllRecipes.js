import supabase from "../supabase";

const getAllRecipes = async () => {
	let { data, error } = await supabase.from("recipes").select();

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};

export default getAllRecipes;
