import PropTypes from "prop-types";
import { useState } from "react";
import { RecipePageItem } from "./RecipePageItem";

export const InteractiveRecipeInstructions = ({ recipe }) => {
	const [visiblePage, setVisiblePage] = useState(0);

	const pages = [
		{
			type: "title",
			contents: {
				name: recipe.name,
				image: recipe.images[0],
				cookTime: recipe.cookTime,
				prepTime: recipe.prepTime,
			},
		},
	];

	const blockSize = 12;
	if (recipe.ingredients.length > blockSize) {
		const blocks = [];
		for (let i = 0; i < recipe.ingredients.length; i += blockSize) {
			const block = recipe.ingredients.slice(i, i + blockSize);
			blocks.push(block);
		}
		blocks.forEach((ingredientBlock) => {
			pages.push({ type: "ingredient", contents: ingredientBlock });
		});
	} else {
		pages.push({ type: "ingredient", contents: recipe.ingredients });
	}

	recipe.steps.forEach((step, index) => {
		pages.push({ type: "step", contents: { step, number: index + 1 } });
	});

	pages.push({
		type: "finished",
		contents: { returnAddress: `/view/${recipe.id}` },
	});

	return (
		<>
			{pages.map((pageProperties, index) => {
				let showPage = false;
				if (index === visiblePage) {
					showPage = true;
				} else {
					showPage = false;
				}
				return (
					<RecipePageItem
						key={"page-" + index}
						pageProperties={pageProperties}
						showPage={showPage}
						nextFunction={() => setVisiblePage(visiblePage + 1)}
						backFunction={() => setVisiblePage(visiblePage - 1)}
					/>
				);
			})}
		</>
	);
};

InteractiveRecipeInstructions.propTypes = {
	recipe: PropTypes.object,
};
