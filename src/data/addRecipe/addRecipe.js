import supabase from "../supabase";

const addRecipe = async (values) => {
	const { data, error } = await supabase
		.from("recipes-dev")
		.insert([values])
		.select();

	if (error) {
		return undefined;
	}
	if (data) {
		return data[0].id;
	}
};

export default addRecipe;
