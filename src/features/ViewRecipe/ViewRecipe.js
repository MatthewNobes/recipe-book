import { useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { ChipBar, ViewDetails, RecipeHeader } from "./";
import { FavoriteButton, Loading, Page } from "components";
import { useParams } from "react-router-dom";
import { getRecipeByID, removeKeywordFromRecipe, addKeyword } from "data";
import { Keywords } from "./Keywords/Keywords";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../../store/slices/toastSlice/toastSlice";

export const ViewRecipe = () => {
	const { recipeID } = useParams();
	const dispatch = useDispatch();

	const [recipe, setRecipe] = useState();

	const usersRoles = useSelector((state) => state.usersRoles.usersRoles);
	const isLoggedIn = usersRoles !== false ? true : false;
	const isContributor = isLoggedIn ? usersRoles.includes("Contributor") : false;

	const deleteKeyword = isContributor ? (id) => removeKeyword(id) : undefined;

	const removeKeyword = async (idToRemove) => {
		const result = await removeKeywordFromRecipe(
			recipeID,
			recipe.keywords,
			idToRemove,
		);

		if (result.result === "failed") {
			dispatch(
				setToast({
					message: "Unable to remove keyword",
					alertType: "error",
					isOpen: true,
				}),
			);
		} else if (result.result === "success") {
			dispatch(
				setToast({
					message: "Keyword removed",
					alertType: "success",
					isOpen: true,
				}),
			);
			setRecipe(result.value);
		}
	};

	const onAdd = async (keywordToAdd) => {
		const result = await addKeyword(recipeID, recipe.keywords, keywordToAdd);

		if (result.result === "failed") {
			dispatch(
				setToast({
					message: "Unable to remove keyword",
					alertType: "error",
					isOpen: true,
				}),
			);
		} else if (result.result === "success") {
			dispatch(
				setToast({
					message: "Keyword removed",
					alertType: "success",
					isOpen: true,
				}),
			);
			setRecipe(result.value);
		}
	};

	useEffect(() => {
		const fetchRecipe = async () => {
			setRecipe(await getRecipeByID(recipeID));
		};
		fetchRecipe();
	}, [recipeID]);

	if (recipe) {
		const createdDate = new Date(recipe.createdAt);

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
							servesNumber={recipe.servingNumber}
							difficultyRating={recipe.difficultyRating}
							cookTime={recipe.cookTime}
							prepTime={recipe.prepTime}
							country={recipe.country}
							vegStatus={recipe.vegStatus}
							canBeFrozen={recipe.canBeFrozen}
						/>
						<Typography variant="body1" sx={{ textAlign: "left" }}>
							{recipe.description}
						</Typography>
						<Keywords
							keywords={recipe.keywords}
							isContributor={isContributor}
							deleteKeyword={deleteKeyword}
							onAdd={onAdd}
						/>
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
