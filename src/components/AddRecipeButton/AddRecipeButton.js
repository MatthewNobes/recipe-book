import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import supabase from "../../data/supabase";

export const AddRecipeButton = () => {
	const navigate = useNavigate();

	const [loggedIn, setLoggedIn] = useState(
		supabase.changedAccessToken ? true : false,
	);

	supabase.auth.onAuthStateChange((event, session) => {
		if (session) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	});

	if (loggedIn) {
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
