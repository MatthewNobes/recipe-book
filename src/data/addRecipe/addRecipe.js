import supabase from "../supabase";
import { auth } from "../index";

const addRecipe = async (values) => {
	await auth();
	const { data, error } = await supabase
		.from("recipes")
		.insert([values])
		.select();

	if (error) {
		return undefined;
	}
	if (data) {
		return data[0].id;
	}
};

export default addRecipe;
