import { useEffect } from "react";
import { RecipeForm, SubPageHeader } from "../../components";
import supabase from "../../data/supabase";
import { useNavigate } from "react-router-dom";

export const AddRecipe = () => {
	const navigate = useNavigate();

	const redirectToLogin = () => navigate("/Login");

	const isAuthorised = supabase.realtime.accessToken ? true : false;

	if (isAuthorised) {
		return (
			<>
				<SubPageHeader headerText="Add Recipe" />
				<RecipeForm />
			</>
		);
	} else {
		useEffect(() => {
			redirectToLogin();
		}, []);
	}
};
