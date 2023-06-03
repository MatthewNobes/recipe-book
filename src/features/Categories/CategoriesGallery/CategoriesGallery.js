import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { GenericImageCard } from "../../../components";

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
				return (
					<GenericImageCard
						key={category.id}
						id={category.id}
						title={category.name}
						image={category.image}
					/>
				);
			})}
		</Box>
	);
};

CategoriesGallery.propTypes = {
	categories: PropTypes.array,
};
