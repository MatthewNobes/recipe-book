import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AddRecipeButton, Header, Page, RecipeList, Loading } from "components";
import { getAllRecipes } from "data";

/**
 * Feature component for the Browse Recipe page
 * @returns {React.ReactElement} The Browse Recipe page
 */
export const BrowseRecipes = () => {
	const [recipes, setRecipes] = useState([]);
	const [moreRecipesToLoad, setMoreRecipesToLoad] = useState(false);
	const [maxNumberOfRecords, setMaxNumberOfRecords] = useState(1);

	// Used for getting the scroll requesting system working
	let lowerRangeIndex = 0;
	let upperRangeIndex = 9;
	const itemIntervalSize = 10;

	const handleScroll = (e) => {
		if (moreRecipesToLoad) {
			const bottom =
				e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 10;
			if (bottom) {
				if (upperRangeIndex === maxNumberOfRecords) {
					setMoreRecipesToLoad(false);
				} else {
					lowerRangeIndex = upperRangeIndex + 1;
					upperRangeIndex = upperRangeIndex + itemIntervalSize;
					if (upperRangeIndex >= maxNumberOfRecords) {
						upperRangeIndex = maxNumberOfRecords;
					}
					fetchRecipes(lowerRangeIndex, upperRangeIndex);
				}
			}
		}
	};

	const fetchRecipes = async (lowerRangeIndex, upperRangeIndex) => {
		if (recipes.length < maxNumberOfRecords) {
			const foundRecipes = await getAllRecipes(
				lowerRangeIndex,
				upperRangeIndex,
			);
			setMaxNumberOfRecords(foundRecipes.count);
			if (foundRecipes.count > upperRangeIndex) {
				setMoreRecipesToLoad(true);
			}
			setRecipes([...recipes, ...foundRecipes.data]);
		} else {
			setMoreRecipesToLoad(false);
		}
	};

	useEffect(() => {
		fetchRecipes(lowerRangeIndex, upperRangeIndex);
	}, []);

	const navigate = useNavigate();

	const navigateToNewRecipe = useCallback(
		() => navigate("/add", { replace: false }),
		[navigate],
	);

	const menuOptions = [
		{
			label: "New recipe",
			onClickFunction: () => {
				navigateToNewRecipe();
			},
		},
		{
			label: "Edit recipe",
			onClickFunction: () => {
				console.log("This option will come later");
			},
		},
	];

	return (
		<div
			onScroll={handleScroll}
			style={{ overflowY: "scroll", maxHeight: "100vh" }}
		>
			<Header headerText="Browse Recipes" menuOptions={menuOptions} />
			<Page>
				<RecipeList recipes={recipes} />
				{moreRecipesToLoad ? <Loading /> : <></>}
				<AddRecipeButton />
			</Page>
		</div>
	);
};
