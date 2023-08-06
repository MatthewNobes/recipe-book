import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const RecommendRecipeButton = () => {
	const navigate = useNavigate();
	return (
		<Box sx={{ textAlign: "center" }}>
			<Button
				onClick={() => navigate("/RecommendRecipe")}
				sx={{ width: "90%", paddingY: 4, marginY: 2 }}
				variant="contained"
			>
				Not sure what to have? Get a recommendation
			</Button>
		</Box>
	);
};
