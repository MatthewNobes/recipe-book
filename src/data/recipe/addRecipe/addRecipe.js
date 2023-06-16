import supabase from "../../supabase";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipes-dev";

export const addRecipe = async (values) => {
	const { data, error } = await supabase.from(table).insert([values]).select();

	if (error) {
		return undefined;
	}
	if (data) {
		return data[0].id;
	}
};
