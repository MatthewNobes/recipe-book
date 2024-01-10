import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import {
	AddRecipeButton,
	RecipeList,
	Page,
	SubPageHeader,
	ImageGallery,
	ImageGallerySkeleton,
} from "components";
import { getRecipesByCategoryName } from "data";
import PropTypes from "prop-types";

export const Category = () => {
	const { category } = useParams();
	return (
		<>
			<SubPageHeader headerText={category} />
			<Page>
				<CategoryList category={category} />
			</Page>
		</>
	);
};

const CategoryList = ({ category }) => {
	const [recipes, setRecipes] = useState();

	useEffect(() => {
		const fetchRecipe = async () => {
			const foundRecipes = await getRecipesByCategoryName(category);
			setRecipes(foundRecipes.data);
		};
		fetchRecipe();
	}, [category]);

	if (recipes) {
		if (recipes.length > 0) {
			return (
				<>
					<ImageGallery
						recipes={recipes}
						howManyToDisplay={4}
						haveAlternatingLargeImage={false}
					/>
					<RecipeList recipes={recipes} />
					<AddRecipeButton />
				</>
			);
		} else {
			return (
				<Typography sx={{ textAlign: "center" }}>No recipes found</Typography>
			);
		}
	} else {
		return (
			<>
				<ImageGallerySkeleton />
			</>
		);
	}
};

CategoryList.propTypes = {
	category: PropTypes.string,
};
