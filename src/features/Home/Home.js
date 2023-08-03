import { Header, ImageGallery, Page } from "components";
import { useEffect, useState } from "react";
import { getAllRecipes } from "data";

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
			</Page>
		</>
	);
};
