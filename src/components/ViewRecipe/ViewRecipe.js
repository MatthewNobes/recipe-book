import { useState, useEffect } from "react";
import { Box, Typography, Tooltip, Chip } from "@mui/material";
import { Divider } from "@mui/material";
import { ViewMethod } from "./ViewMethod/ViewMethod";
import { ViewIngredients } from "./ViewIngredients/ViewIngredients";
import { RecipeChip } from "./RecipeChip/RecipeChip";
import { Hardware } from "@mui/icons-material";
import FavoriteButton from "../FavoriteButton";
import { useParams } from "react-router-dom";
import { getDifficultyColour } from "../../utils";

import RecipeHeader from "./RecipeHeader";

const method = [
	{
		stepID: 1,
		stepText:
			"Mix the maple syrup, mustard, vinegar and ground cloves or five-spice in a jug. Pour half over the fat, roast for 15 mins, then pour over the rest and return to the oven for another 30 mins.",
		stepNumber: 1,
	},
	{
		stepID: 2,
		stepText:
			"Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to two days ahead and served cold.",
		stepNumber: 2,
	},
	{
		stepID: 3,
		stepText: "Boil an egg",
		stepNumber: 3,
	},
	{
		stepID: 4,
		stepText: "Accelerate to 88mph",
		stepNumber: 4,
	},
	{
		stepID: 5,
		stepText:
			"Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to two days ahead and served cold.",
		stepNumber: 5,
	},
	{
		stepID: 6,
		stepText: "Do something else",
		stepNumber: 6,
	},
];

const ingredients = [
	{
		recipeIngredientID: 1,
		ingredient: "Egg",
		ingredientDescription: "A chickens egg",
		ingredientInfoURL: "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEgg",
		quantity: 2,
		measurement: "Whole",
	},
	{
		recipeIngredientID: 45,
		ingredient: "Milk",
		ingredientDescription: "A chickens egg",
		ingredientInfoURL: "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEgg",
		quantity: 1,
		measurement: "Liter",
	},
	{
		recipeIngredientID: 17,
		ingredient: "Sugar",
		ingredientDescription: "A chickens egg",
		ingredientInfoURL: "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEgg",
		quantity: 200,
		measurement: "Grams",
	},
	{
		recipeIngredientID: 18,
		ingredient: "Baking soda",
		ingredientDescription: "A chickens egg",
		ingredientInfoURL: "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEgg",
		quantity: 2,
		measurement: "Teaspoons",
	},
];

export const ViewRecipe = () => {
	const { recipeID } = useParams();

	const [recipe, setRecipe] = useState({});

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + "/recipes/recipe/" + recipeID)
			.then((response) => response.json())
			.then((data) => setRecipe(data.data));
	}, [recipeID]);

	console.log(recipe);

	const recipeName = recipe.RecipeName;
	const recipeDescription = recipe.RecipeDecsription;
	const difficultyRating = recipe.RecipeDifficultyRating;
	const imageSource =
		"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg/1200px-Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg";

	const difficultyColour = getDifficultyColour(difficultyRating);
	const isFavorite = false; // to be populated later

	return (
		<>
			<RecipeHeader imageSource={imageSource} recipeName={recipeName} />
			<Box sx={{ paddingX: 1 }}>
				<Box sx={{ paddingBottom: 3 }}>
					<Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
						<Typography variant="h2">{recipeName}</Typography>
						<FavoriteButton isFav={isFavorite} recipeID={recipeID} />
					</Box>
					<Box sx={{ display: "flex", gap: "10px", mt: 1 }}>
						<RecipeChip label="Prep: " value={recipe.RecipePrepTime} />
						<RecipeChip label="Cook: " value={recipe.RecipeCookTime} />
						<Tooltip
							title={
								"Please view the info page for more details on difficult ratings"
							}
						>
							<Chip
								icon={<Hardware />}
								label={"Difficulty: " + difficultyRating}
								color={difficultyColour}
								variant="outlined"
							/>
						</Tooltip>
					</Box>
					<Typography variant="body1" sx={{ textAlign: "left" }}>
						{recipeDescription}
					</Typography>
				</Box>
				<Divider />
				<Box sx={{ paddingBottom: 3 }}>
					<ViewIngredients ingredients={ingredients} />
					<ViewMethod method={method} />
				</Box>
			</Box>
		</>
	);
};
