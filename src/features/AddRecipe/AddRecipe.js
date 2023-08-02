import { RecipeForm, SubPageHeader, Page } from "components";

export const AddRecipe = () => {
	return (
		<>
			<SubPageHeader headerText="Add Recipe" />
			<Page>
				<RecipeForm />
			</Page>
		</>
	);
};
