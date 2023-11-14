import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const AddRecipeButton = () => {
	const navigate = useNavigate();

	const usersRoles = useSelector((state) => state.usersRoles.usersRoles);

	const isLoggedIn = usersRoles !== false ? true : false;
	const isContributor = isLoggedIn ? usersRoles.includes("Contributor") : false;

	if (isContributor) {
		return (
			<Fab
				color="primary"
				aria-label="add-recipe"
				sx={{ position: "fixed", right: 16, bottom: 64 }}
				onClick={() => navigate("/add")}
			>
				<Add />
			</Fab>
		);
	}
};
