import { useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { ChipBar, ViewDetails, RecipeHeader } from "./";
import { FavoriteButton, Loading, Page } from "components";
import { useParams } from "react-router-dom";
import { getRecipeByID } from "data";
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
		const createdDate = new Date(recipe.created_at);

		return (
			<>
				<RecipeHeader
					imageSource={recipe.images[0]}
					recipeName={recipe.name}
					id={recipe.id}
				/>
				<Page>
					<Box sx={{ paddingBottom: 3, paddingX: 1 }}>
						<Box
							sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
						>
							<Typography variant="h2">{recipe.name}</Typography>
							{recipe.isFavorite === undefined ? (
								<></>
							) : (
								<FavoriteButton
									isFav={recipe.isFavorite}
									recipeID={parseInt(recipeID)}
								/>
							)}
						</Box>
						<ChipBar
							servesNumber={recipe.serving_number}
							difficultyRating={recipe.difficulty_rating}
							cookTime={recipe.cook_time}
							prepTime={recipe.prep_time}
							country={recipe.country}
							vegStatus={recipe.vegStatus}
							canBeFrozen={recipe.canBeFrozen}
						/>
						<Typography variant="body1" sx={{ textAlign: "left" }}>
							{recipe.description}
						</Typography>
						<Keywords keywords={recipe.keywords} />
					</Box>
					<Divider />
					<ViewDetails
						ingredients={recipe.ingredients}
						method={recipe.steps}
						recipeSource={recipe.source}
						notes={recipe.notes}
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
