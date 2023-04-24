import { RecipeForm } from "../../components";
import { SubPageHeader } from "../../components";

export const AddRecipe = () => {
	return (
		<div>
			<SubPageHeader headerText="Add Recipe" />
			<RecipeForm />
		</div>
	);
};
