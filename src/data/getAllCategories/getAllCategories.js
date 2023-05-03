import supabase from "../supabase";

const getAllCategories = async () => {
	let { data, error } = await supabase.from("categories").select();

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};

export default getAllCategories;
