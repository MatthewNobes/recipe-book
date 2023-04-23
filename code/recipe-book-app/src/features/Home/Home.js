import { Header, ImageGallery } from "../../components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import getAllRecipes from "../../data/getAllRecipes/getAllRecipes";

export const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			setRecipes(await getAllRecipes());
		};
		fetchRecipes();
	}, []);

	return (
		<Box sx={{ paddingBottom: 10 }}>
			<Header headerText="Recipe Book" />
			<ImageGallery recipes={recipes} howManyToDisplay={8} />
		</Box>
	);
};
