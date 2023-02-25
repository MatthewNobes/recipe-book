import AppendRecipeForm from "../../components/AppendRecipeForm";
import { SubPageHeader } from "../../components";

export const AddRecipe = () => {
	return (
		<div>
			<SubPageHeader headerText="Add Recipe" />
			<AppendRecipeForm />
		</div>
	);
};
