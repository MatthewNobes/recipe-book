import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ViewAllButton = () => {
	const navigate = useNavigate();
	return (
		<Button onClick={() => navigate("/browse")} sx={{ px: 2, py: 1 }}>
			View All Recipes
		</Button>
	);
};
