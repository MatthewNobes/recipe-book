import supabase from "../../supabase";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipes-dev";

export const getRecipesByCategoryName = async (categoryName) => {
	let { data, error } = await supabase
		.from(table)
		.select()
		.eq("category", categoryName);

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};
