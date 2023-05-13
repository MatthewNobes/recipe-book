import supabase from "../supabase";

const deleteUnit = async (id) => {
	const { error } = await supabase.from("units").delete().eq("id", id);

	if (error) {
		console.log(error);
		return "failed";
	} else {
		return "success";
	}
};

export default deleteUnit;
