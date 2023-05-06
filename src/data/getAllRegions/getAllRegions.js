import supabase from "../supabase";

const getAllRegions = async () => {
	let { data, error } = await supabase.from("regions").select();

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};

export default getAllRegions;
