import supabase from "../supabase";

export const updateRecipe = async (idToUpdate, values) => {
	const { data, error } = await supabase
		.from("recipes-dev")
		.update(values)
		.eq("id", idToUpdate)
		.select();

	if (error) {
		return undefined;
	}
	if (data) {
		return data[0].id;
	}
};
