import { useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { ChipBar, ViewDetails, RecipeHeader } from "./";
import FavoriteButton from "../FavoriteButton";
import { useParams } from "react-router-dom";
import { utf8Decode } from "../../utils";

export const ViewRecipe = () => {
	const { recipeID } = useParams();

	const [recipe, setRecipe] = useState({});
	const [method, setMethod] = useState([]);
	const [ingredients, setIngredients] = useState([]);

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + "/recipes/recipe/" + recipeID)
			.then((response) => response.json())
			.then((data) => setRecipe(data.data));
		fetch(process.env.REACT_APP_API_URL + "/method/method/" + recipeID)
			.then((response) => response.json())
			.then((data) => {
				if (data.data === "no method found") {
					setMethod([]);
				} else {
					setMethod(data.data);
				}
			});
		fetch(process.env.REACT_APP_API_URL + "/ingredients/recipe/" + recipeID)
			.then((response) => response.json())
			.then((data) => {
				if (data.data === "no ingredients found") {
					setIngredients([]);
				} else {
					setIngredients(data.data);
				}
			});
	}, [recipeID]);

	const recipeName = recipe.recipeName;
	const recipeDescription = recipe.recipeDescription;
	const difficultyRating = recipe.recipeDifficultyRating;
	const servesNumber = recipe.servingNumber;
	const imageSource =
		"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken-madras-f69ab47.jpg";

	const isFavorite = false; // to be populated later
	const recipeSource = utf8Decode(recipe.recipeSource);
	const cookTime = recipe.recipeCookTime;
	const prepTime = recipe.recipePrepTime;

	return (
		<>
			<RecipeHeader imageSource={imageSource} recipeName={recipeName} />
			<Box sx={{ marginBottom: 10 }}>
				<Box sx={{ paddingBottom: 3, paddingX: 1 }}>
					<Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
						<Typography variant="h2">{recipeName}</Typography>
						<FavoriteButton isFav={isFavorite} recipeID={recipeID} />
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
					ingredients={ingredients}
					method={method}
					recipeSource={recipeSource}
				/>
				<Divider />
			</Box>
		</>
	);
};
