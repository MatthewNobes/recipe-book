import Header from "../../components/Header";
import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
import { useEffect, useState } from "react";

export const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + "/recipes/recipes")
			.then((response) => response.json())
			.then((data) => setRecipes(data.data));
	}, []);
	return (
		<div>
			<Header headerText="Recipe Book" />
			<ImageGallery recipes={recipes} howManyToDisplay={8} />
		</div>
	);
};
