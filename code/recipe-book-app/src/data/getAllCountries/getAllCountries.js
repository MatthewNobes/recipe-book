import supabase from "../supabase";

const getAllCountries = async () => {
	let { data, error } = await supabase.from("countries").select();

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};

export default getAllCountries;
