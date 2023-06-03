import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { GenericImageCard } from "../../../components";
import { useNavigate } from "react-router-dom";

export const CategoriesGallery = ({ categories }) => {
	const navigate = useNavigate();
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
				const onClickFunction = navigate("/category/" + category.id);
				return (
					<GenericImageCard
						key={category.id}
						id={category.id}
						title={category.name}
						image={category.image}
						onClickFn={onClickFunction}
					/>
				);
			})}
		</Box>
	);
};

CategoriesGallery.propTypes = {
	categories: PropTypes.array,
};
