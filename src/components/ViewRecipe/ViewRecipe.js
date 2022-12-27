import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { ViewMethod } from "./ViewMethod/ViewMethod";
import { ViewIngredients } from "./ViewIngredients/ViewIngredients";
import { RecipeChip } from "./RecipeChip/RecipeChip";
import FavoriteButton from "../FavoriteButton";
import { useParams } from "react-router-dom";
import { utf8Decode } from "../../utils";
import { ServesChip } from "./ServesChip/ServesChip";
import { RecipeFooter } from "./RecipeFooter/RecipeFooter";
import { DifficultyChip } from "./DifficultyChip/DifficultyChip";
import RecipeHeader from "./RecipeHeader";

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
	const [method, setMethod] = useState([]);

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + "/recipes/recipe/" + recipeID)
			.then((response) => response.json())
			.then((data) => setRecipe(data.data));
		fetch(process.env.REACT_APP_API_URL + "/method/method/" + recipeID)
			.then((response) => response.json())
			.then((data) => setMethod(data.data));
	}, [recipeID]);

	console.log(recipe);
	console.log(method);

	const recipeName = recipe.RecipeName;
	const recipeDescription = recipe.RecipeDecsription;
	const difficultyRating = recipe.RecipeDifficultyRating;
	const servesNumber = recipe.ServingNumber;
	const imageSource =
		"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg/1200px-Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg";

	const isFavorite = false; // to be populated later
	const recipeSource = utf8Decode(recipe.RecipeSource);

	return (
		<>
			<RecipeHeader imageSource={imageSource} recipeName={recipeName} />
			<Box sx={{ paddingX: 1 }}>
				<Box sx={{ paddingBottom: 3 }}>
					<Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
						<Typography variant="h2">{recipeName}</Typography>
						<FavoriteButton isFav={isFavorite} recipeID={recipeID} />
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: "10px",
							mt: 1,
							mb: 1,
							flexWrap: "wrap",
						}}
					>
						<ServesChip servesNumber={servesNumber} />
						<DifficultyChip difficultyRating={difficultyRating} />
						<RecipeChip label="Prep: " value={recipe.RecipePrepTime} />
						<RecipeChip label="Cook: " value={recipe.RecipeCookTime} />
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
				<Divider />
				<RecipeFooter recipeSource={recipeSource} />
			</Box>
		</>
	);
};
