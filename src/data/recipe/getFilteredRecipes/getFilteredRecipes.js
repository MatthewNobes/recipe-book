import supabase from "../../supabase";

export const getFilteredRecipes = async (filters) => {
	const filterByVegStatus = filters.vegStatus;

	let query = supabase.from("recipes").select("*", { count: "exact" });

	if (filterByVegStatus) {
		query = query.eq("vegStatus", filterByVegStatus);
	}

	const { data, error, count } = await query;

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return { data: data, count: count };
	}
};
