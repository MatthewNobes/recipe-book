import supabase from "../../supabase";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipes-dev";

export const updateRecipe = async (idToUpdate, values) => {
	const { data, error } = await supabase
		.from(table)
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
