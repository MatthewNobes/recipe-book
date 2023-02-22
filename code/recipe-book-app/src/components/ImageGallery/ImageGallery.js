import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
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

	const cutDownRecipes = recipes.slice(0, howManyToDisplay);

	return (
		<ImageList
			sx={{
				maxWidth: 1,
				marginTop: 1,
			}}
			gap={2}
		>
			{cutDownRecipes.map((details) => {
				if (details.images.length > 0) {
					const cols = details.images[0].isLandscape ? 2 : 1;
					const rows = details.images[0].isLandscape ? 2 : 1;

					return (
						<ImageListItem key={details.recipeID} cols={cols} rows={rows}>
							<img
								{...srcset(
									utf8Decode(details.images[0].imageSource),
									250,
									200,
									rows,
									cols,
								)}
								alt={utf8Decode(details.recipeDescription)}
								loading="lazy"
								onClick={() => navigate("/ViewRecipe/" + details.recipeID)}
							/>
							<ImageListItemBar
								sx={{
									background:
										"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
										"rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
								}}
								title={utf8Decode(details.recipeName)}
								position="top"
								actionIcon={
									<FavoriteButton isFav={false} recipeID={details.recipeID} />
								}
								actionPosition="right"
							/>
						</ImageListItem>
					);
				}
			})}
		</ImageList>
	);
};

ImageGallery.propTypes = {
	recipes: PropTypes.object,
	howManyToDisplay: PropTypes.number,
};
