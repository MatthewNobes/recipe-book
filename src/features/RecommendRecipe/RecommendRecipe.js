import { Header, Page } from "components";
import RecommendRecipeForm from "./RecommendRecipeForm";

export const RecommendRecipe = () => {
	return (
		<>
			<Header headerText="Recommend Recipe" />
			<Page>
				<RecommendRecipeForm />
			</Page>
		</>
	);
};
