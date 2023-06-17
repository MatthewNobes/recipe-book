import { useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { ChipBar, ViewDetails, RecipeHeader } from "./";
import { FavoriteButton, Loading, Page } from "../../components";
import { useParams } from "react-router-dom";
import { getRecipeByID } from "../../data";
import { Keywords } from "./Keywords/Keywords";

export const ViewRecipe = () => {
	const { recipeID } = useParams();

	const [recipe, setRecipe] = useState();

	useEffect(() => {
		const fetchRecipe = async () => {
			setRecipe(await getRecipeByID(recipeID));
		};
		fetchRecipe();
	}, [recipeID]);

	if (recipe) {
		const recipeName = recipe.name;
		const recipeDescription = recipe.description;
		const difficultyRating = recipe.difficulty_rating;
		const servesNumber = recipe.serving_number;
		const imageSource = recipe.images[0];
		const country = recipe.country;
		const isFavorite = false; // to be populated later
		const recipeSource = recipe.source;
		const cookTime = recipe.cook_time;
		const prepTime = recipe.prep_time;
		const keywords = recipe.keywords;
		const vegStatus = recipe.vegStatus;
		const notes = recipe.notes;
		const canBeFrozen = recipe.canBeFrozen;
		const createdDate = new Date(recipe.created_at);

		return (
			<>
				<RecipeHeader
					imageSource={imageSource}
					recipeName={recipeName}
					id={recipe.id}
				/>
				<Page>
					<Box sx={{ paddingBottom: 3, paddingX: 1 }}>
						<Box
							sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
						>
							<Typography variant="h2">{recipeName}</Typography>
							<FavoriteButton
								isFav={isFavorite}
								recipeID={parseInt(recipeID)}
							/>
						</Box>
						<ChipBar
							servesNumber={servesNumber}
							difficultyRating={difficultyRating}
							cookTime={cookTime}
							prepTime={prepTime}
							country={country}
							vegStatus={vegStatus}
							canBeFrozen={canBeFrozen}
						/>
						<Typography variant="body1" sx={{ textAlign: "left" }}>
							{recipeDescription}
						</Typography>
						<Keywords keywords={keywords} />
					</Box>
					<Divider />
					<ViewDetails
						ingredients={recipe.ingredients}
						method={recipe.steps}
						recipeSource={recipeSource}
						notes={notes}
						createdDate={createdDate}
					/>
					<Divider />
				</Page>
			</>
		);
	} else {
		return <Loading />;
	}
};
