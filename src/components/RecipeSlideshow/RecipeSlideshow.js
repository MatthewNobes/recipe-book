import {
	ImageListItem,
	ImageList,
	ImageListItemBar,
	IconButton,
	Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const SlideshowItem = ({ recipe }) => {
	const navigate = useNavigate();
	return (
		<ImageListItem cols={2}>
			<img
				src={recipe.images[0] + "?h=300"}
				style={{ height: "300px" }}
				alt={recipe.description}
			/>
			<ImageListItemBar
				sx={{
					background:
						"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
						"rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
					zIndex: 3,
				}}
				title={recipe.name}
				position="top"
				onClick={() => navigate("/view/" + recipe.id)}
			/>
		</ImageListItem>
	);
};

SlideshowItem.propTypes = {
	recipe: PropTypes.object,
};

export const RecipeSlideshow = ({ recipes }) => {
	const [currentItem, setCurrentItem] = useState(0);

	const handleForwards = () => {
		if (recipes.length === currentItem + 1) {
			setCurrentItem(0);
		} else {
			setCurrentItem(currentItem + 1);
		}
	};

	const handleBackwards = () => {
		if (currentItem === 0) {
			setCurrentItem(recipes.length - 1);
		} else {
			setCurrentItem(currentItem - 1);
		}
	};

	if (recipes.length) {
		return (
			<ImageList>
				<Box
					component="li"
					sx={{
						position: "absolute",
						zIndex: 2,
						width: "100%",
						maxWidth: "600px",
						paddingTop: "100px",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<IconButton
						onClick={handleBackwards}
						sx={{ pr: "20%", minHeight: "120px" }}
						aria-label="Previous recipe"
					>
						<KeyboardArrowLeft fontSize="large" />
					</IconButton>
					<IconButton
						onClick={handleForwards}
						sx={{ pl: "20%", minHeight: "120px" }}
						aria-label="Next recipe"
					>
						<KeyboardArrowRight fontSize="large" />
					</IconButton>
				</Box>

				<SlideshowItem recipe={recipes[currentItem]} />
			</ImageList>
		);
	}
};

RecipeSlideshow.propTypes = {
	recipes: PropTypes.array,
};
