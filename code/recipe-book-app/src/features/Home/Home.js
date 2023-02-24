import { Header, ImageGallery } from "../../components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + "/recipes/recipes")
			.then((response) => response.json())
			.then((data) => setRecipes(data.data));
	}, []);
	return (
		<Box sx={{ paddingBottom: 10 }}>
			<Header headerText="Recipe Book" />
			<ImageGallery recipes={recipes} howManyToDisplay={8} />
		</Box>
	);
};
