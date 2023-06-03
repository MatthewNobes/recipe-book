import {
	Card,
	CardActionArea,
	CardMedia,
	Typography,
	CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const CategoryCard = ({ category }) => {
	const navigate = useNavigate();
	let funcToNavigate = () => navigate("/ViewRecipe");
	if (category.onClickFn) {
		funcToNavigate = () => category.onClickFn();
	}
	return (
		<Card
			id={"category-" + category.id}
			sx={{ maxWidth: "300px", width: "48%", minWidth: "130px" }}
		>
			<CardActionArea
				onClick={() => funcToNavigate()}
				aria-label={"click to view " + category.name + " recipes"}
			>
				<CardMedia
					component="img"
					height="140"
					image={category.image}
					alt={category.name}
				/>

				<CardContent>
					<Typography variant="h5" component="div">
						{category.name}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

CategoryCard.propTypes = {
	category: PropTypes.object,
};
