import supabase from "data/supabase";

export const deleteCurrentUser = async () => {
	const {
		data: { user },
	} = await supabase.auth.getUser();
	const { error } = await supabase.auth.admin.deleteUser(user.id);

	if (error) {
		console.log(error);
		return "failed";
	} else {
		return "success";
	}
};
