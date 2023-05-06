import supabase from "../supabase";

export const getAllUnits = async () => {
	let { data, error } = await supabase.from("units").select();

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};
