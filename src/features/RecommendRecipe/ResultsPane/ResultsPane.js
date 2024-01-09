import { Button, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { calculateFilters } from "./calculateFilters/calculateFilters";
import { ImageGallery, ImageGallerySkeleton } from "components";
import { useEffect, useState } from "react";
import { getFilteredRecipes } from "data";
import { ArrowBack } from "@mui/icons-material";
import { filterRecipesForTimeRange } from "utils";

/**
 * Displays the results of the recommend recipe form into an ImageGallery
 * @param {*} props
 * @returns {}
 */
export const ResultsPane = ({ answers, resetForm }) => {
	const [recipes, setRecipes] = useState();
	const [amountToDisplay, setAmountToDisplay] = useState(4);

	const filters = calculateFilters(answers);

	useEffect(() => {
		const fetchRecipes = async () => {
			const foundRecipes = await getFilteredRecipes(filters);
			setRecipes(
				filterRecipesForTimeRange(
					foundRecipes.data,
					filters.minTime,
					filters.maxTime,
				),
			);
		};
		fetchRecipes();
	}, []);

	if (recipes) {
		if (recipes.length > 0) {
			return (
				<>
					<ImageGallery
						recipes={recipes}
						howManyToDisplay={amountToDisplay}
						haveAlternatingLargeImage={false}
						randomise={false}
					/>
					{amountToDisplay >= recipes.length ? (
						<Typography
							variant="body2"
							gutterBottom
							sx={{ textAlign: "center", py: 2 }}
						>
							Showing all {recipes.length} results
						</Typography>
					) : (
						<Box sx={{ textAlign: "center" }}>
							<Button onClick={() => setAmountToDisplay(amountToDisplay + 4)}>
								More recipes
							</Button>
						</Box>
					)}
				</>
			);
		} else if (recipes.length === 0) {
			return (
				<Box sx={{ textAlign: "center" }}>
					<Typography variant="body2" gutterBottom sx={{ py: 2 }}>
						No results found
					</Typography>
					<Button
						startIcon={<ArrowBack />}
						variant="outlined"
						onClick={() => resetForm()}
					>
						Go back
					</Button>
				</Box>
			);
		}
	} else {
		return <ImageGallerySkeleton />;
	}
};

ResultsPane.propTypes = {
	answers: PropTypes.array,
	resetForm: PropTypes.func,
};
