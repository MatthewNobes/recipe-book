import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import FavoriteButton from "../FavoriteButton";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { shuffleArray, utf8Decode } from "utils";

export const ImageGallery = ({
	recipes,
	howManyToDisplay,
	haveAlternatingLargeImage,
	randomise = false,
}) => {
	const navigate = useNavigate();

	if (randomise) {
		shuffleArray(recipes);
	}

	const recipesWithImages = recipes.filter(
		(recipe) => recipe.images.length > 0,
	);

	const cutDownRecipes = recipesWithImages.slice(0, howManyToDisplay);

	return (
		<ImageList
			sx={{
				maxWidth: 1,
				marginTop: 1,
				marginBottom: 0,
			}}
			gap={2}
		>
			{cutDownRecipes.map((details, index) => {
				let cols = 1;
				let rows = 1;
				if (haveAlternatingLargeImage) {
					if (index === 2 || index === 7) {
						cols = 2;
						rows = 2;
					}
				}

				return (
					<ImageListItem key={index} cols={cols} rows={rows}>
						<img
							src={`${details.images[0]}?quality=70&resize=440,400&webp=true`}
							srcSet={`${details.images[0]}?quality=70&resize=440,400&webp=true`}
							alt={utf8Decode(details.description)}
							loading="lazy"
							onClick={() => navigate("/view/" + details.id)}
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
								"isFavorite" in details ? (
									<FavoriteButton
										isFav={details.isFavorite}
										recipeID={parseInt(details.id)}
									/>
								) : (
									<></>
								)
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
	haveAlternatingLargeImage: PropTypes.bool,
	randomise: PropTypes.bool,
};
