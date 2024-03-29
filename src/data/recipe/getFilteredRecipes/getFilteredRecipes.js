import supabase from "../../supabase";

export const getFilteredRecipes = async (filters) => {
	const filterByVegStatus = filters.vegStatus;
	const filterByRegion = filters.region;
	const filterByCategory = filters.category;

	let query = supabase.from("recipes").select("*", { count: "exact" });

	if (filterByVegStatus) {
		query = query.eq("vegStatus", filterByVegStatus);
	}
	if (filterByRegion) {
		query = query.eq("region", filterByRegion);
	}
	if (filterByCategory) {
		query = query.in("category", filterByCategory);
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
