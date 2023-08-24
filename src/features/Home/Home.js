import { Header, ImageGallery, Page } from "components";
import { useEffect, useState } from "react";
import { getAllRecipes } from "data";
import RecommendRecipeButton from "./RecommendRecipeButton";
import RecentlyAddedGallery from "./RecentlyAddedGallery";

export const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			const foundRecipes = await getAllRecipes();
			setRecipes(foundRecipes.data);
		};
		fetchRecipes();
	}, []);

	return (
		<>
			<Header headerText="Recipe Book" />
			<Page>
				<ImageGallery
					recipes={recipes}
					howManyToDisplay={8}
					haveAlternatingLargeImage={true}
				/>
				<RecommendRecipeButton />
				<RecentlyAddedGallery recipes={recipes} />
			</Page>
		</>
	);
};
