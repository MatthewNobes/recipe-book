import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { CategoryCard } from "./CategoryCard/CategoryCard";

export const CategoriesGallery = ({ categories }) => {
	return (
		<Box
			sx={{
				margin: 1,
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				gap: 1,
				justifyContent: "center",
			}}
		>
			{categories.map((category) => {
				return <CategoryCard key={category.id} category={category} />;
			})}
		</Box>
	);
};

CategoriesGallery.propTypes = {
	categories: PropTypes.array,
};
