import supabase from "../supabase";

const addUnit = async (values) => {
	const { data, error } = await supabase
		.from("units")
		.insert([values])
		.select();

	if (error) {
		return undefined;
	}
	if (data) {
		return data[0].id;
	}
};

export default addUnit;
