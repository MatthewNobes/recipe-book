import supabase from "../supabase";

export const updateRecipe = async (idToUpdate, values) => {
	console.log(values);
	const { data, error } = await supabase
		.from("recipes")
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
