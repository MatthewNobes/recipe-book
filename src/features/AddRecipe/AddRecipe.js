//import { useEffect } from "react";
import { RecipeForm, SubPageHeader } from "../../components";
//import supabase from "../../data/supabase";
//import { useNavigate } from "react-router-dom";

export const AddRecipe = () => {
	//const navigate = useNavigate();

	//const redirectToLogin = () => navigate("/Login");
	/**
	const navigateToNewRecipe = useCallback(
		() => navigate("/addRecipe", { replace: false }),
		[navigate],
	); */

	//const isAuthorised = supabase.realtime.accessToken ? true : false;

	return (
		<>
			<SubPageHeader headerText="Add Recipe" />
			<RecipeForm />
		</>
	);
};
