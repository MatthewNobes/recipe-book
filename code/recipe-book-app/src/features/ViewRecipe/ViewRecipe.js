import { useState, useEffect } from "react";
import { Box, Typography, Divider, CircularProgress } from "@mui/material";
import { ChipBar, ViewDetails, RecipeHeader } from "./";
import { FavoriteButton } from "../../components";
import { useParams } from "react-router-dom";
import { getRecipeByID } from "../../data";

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

		const isFavorite = false; // to be populated later
		const recipeSource = recipe.source;
		const cookTime = recipe.cook_time;
		const prepTime = recipe.prep_time;

		return (
			<>
				<RecipeHeader
					imageSource={imageSource}
					recipeName={recipeName}
					id={recipe.id}
				/>
				<Box sx={{ marginBottom: 10 }}>
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
						/>
						<Typography variant="body1" sx={{ textAlign: "left" }}>
							{recipeDescription}
						</Typography>
					</Box>
					<Divider />
					<ViewDetails
						ingredients={recipe.ingredients}
						method={recipe.steps}
						recipeSource={recipeSource}
					/>
					<Divider />
				</Box>
			</>
		);
	} else {
		return (
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<CircularProgress />
			</Box>
		);
	}
};
