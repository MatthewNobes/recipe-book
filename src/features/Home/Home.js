import { Header, ImageGallery, Loading, Page } from "components";
import { useEffect, useState } from "react";
import { getAllRecipes } from "data";
import RecommendRecipeButton from "./RecommendRecipeButton";
import RecentlyAddedGallery from "./RecentlyAddedGallery";
import { Typography } from "@mui/material";

export const HomePage = () => {
	const [recipes, setRecipes] = useState();

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
				{recipes ? (
					recipes.length > 0 ? (
						<>
							<ImageGallery
								recipes={recipes}
								howManyToDisplay={8}
								haveAlternatingLargeImage={true}
							/>
							<RecommendRecipeButton />
							<RecentlyAddedGallery recipes={recipes} />
						</>
					) : (
						<Typography sx={{ textAlign: "center", pt: 2 }}>
							No recipes found. Please check your connection.
						</Typography>
					)
				) : (
					<Loading />
				)}
			</Page>
		</>
	);
};
