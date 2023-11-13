import { useEffect, useState } from "react";
import { AddRecipeButton, Header, Page, RecipeList } from "components";
import { getAllRecipes } from "data";
import { Box, Button, Typography } from "@mui/material";

/**
 * Feature component for the Browse Recipe page
 * @returns {React.ReactElement} The Browse Recipe page
 */
export const BrowseRecipes = () => {
	const [recipes, setRecipes] = useState([]);
	const [moreRecipesToLoad, setMoreRecipesToLoad] = useState(true);
	const [maxNumberOfRecords, setMaxNumberOfRecords] = useState(0);
	const itemIntervalSize = 10;

	const loadMoreRecipes = () => {
		const lowerRangeIndex = recipes.length;
		const upperRangeIndex = lowerRangeIndex + itemIntervalSize - 1;
		fetchRecipes(lowerRangeIndex, upperRangeIndex);
	};

	const fetchRecipes = async (lowerRangeIndex, upperRangeIndex) => {
		const foundRecipes = await getAllRecipes(lowerRangeIndex, upperRangeIndex);
		if (lowerRangeIndex === 0) {
			setRecipes(foundRecipes.data);
			setMaxNumberOfRecords(foundRecipes.count);
		} else {
			if (upperRangeIndex >= maxNumberOfRecords) {
				setMoreRecipesToLoad(false);
			}
			setRecipes([...recipes, ...foundRecipes.data]);
		}
	};

	useEffect(() => {
		fetchRecipes(0, itemIntervalSize - 1);
	}, []);

	return (
		<Box sx={{ overflowY: "scroll", maxHeight: "100vh" }}>
			<Header headerText="Browse Recipes" />
			<Page>
				<RecipeList recipes={recipes} />
				<Box sx={{ textAlign: "center", my: 2 }}>
					{moreRecipesToLoad ? (
						<Button
							onClick={() => loadMoreRecipes()}
							aria-label="Load more recipes"
						>
							Load more
						</Button>
					) : (
						<Typography>Showing all {maxNumberOfRecords} recipes</Typography>
					)}
				</Box>
				<AddRecipeButton />
			</Page>
		</Box>
	);
};
