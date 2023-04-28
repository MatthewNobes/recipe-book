import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import FavoriteButton from "../FavoriteButton";
import { useNavigate } from "react-router-dom";
import { utf8Decode } from "../../utils";
import PropTypes from "prop-types";

const srcset = (image, width, height, rows = 1, cols = 1) => {
	return {
		src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${width * cols}&h=${
			height * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
};

export const ImageGallery = ({ recipes, howManyToDisplay }) => {
	const navigate = useNavigate();

	const recipesWithImages = recipes.filter(
		(recipe) => recipe.images.length > 0,
	);

	const cutDownRecipes = recipesWithImages.slice(0, howManyToDisplay);

	return (
		<ImageList
			sx={{
				maxWidth: 1,
				marginTop: 1,
			}}
			gap={2}
		>
			{cutDownRecipes.map((details, index) => {
				let cols = 1;
				let rows = 1;
				if (index === 2 || index === 7) {
					cols = 2;
					rows = 2;
				}

				return (
					<ImageListItem key={index} cols={cols} rows={rows}>
						<img
							{...srcset(utf8Decode(details.images[0]), 250, 200, rows, cols)}
							alt={utf8Decode(details.description)}
							loading="lazy"
							onClick={() => navigate("/ViewRecipe/" + details.id)}
						/>
						<ImageListItemBar
							sx={{
								background:
									"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
									"rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
							}}
							title={utf8Decode(details.name)}
							position="top"
							actionIcon={
								<FavoriteButton isFav={false} recipeID={parseInt(details.id)} />
							}
							actionPosition="right"
						/>
					</ImageListItem>
				);
			})}
		</ImageList>
	);
};

ImageGallery.propTypes = {
	recipes: PropTypes.array,
	howManyToDisplay: PropTypes.number,
};
