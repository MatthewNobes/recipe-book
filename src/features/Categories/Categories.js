import { Header, Loading, Page } from "../../components";
import { CategoriesGallery } from "./CategoriesGallery/CategoriesGallery";
import { getAllCategories } from "../../data";
import { useState, useEffect } from "react";

export const Categories = () => {
	const [categories, setCategories] = useState([]);

	/**
	const cat = [
		{
			id: 0,
			name: "Desserts",
			image:
				"https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
		},
		{
			id: 1,
			name: "Desserts",
			image:
				"https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
		},
		{
			id: 2,
			name: "Desserts",
			image:
				"https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
		},
		{
			id: 3,
			name: "Desserts",
			image:
				"https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
		},
		{
			id: 4,
			name: "Desserts",
			image:
				"https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
		},
		{
			id: 5,
			name: "Desserts",
			image:
				"https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
		},
		{
			id: 6,
			name: "Desserts",
			image:
				"https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
		},
		{
			id: 7,
			name: "Desserts",
			image:
				"https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
			onClickFn: () => navigate("/category/" + 7),
		},
		{
			id: "all",
			name: "View All",
			image:
				"https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png",
			onClickFn: () => navigate("/BrowseRecipes"),
		},
	]; */

	useEffect(() => {
		const fetchRecipe = async () => {
			setCategories(await getAllCategories());
		};
		fetchRecipe();
	}, []);

	if (categories.length > 0) {
		return (
			<>
				<Header headerText="Categories" />
				<Page>
					<CategoriesGallery categories={categories} />
				</Page>
			</>
		);
	} else {
		return (
			<>
				<Header headerText="Categories" />
				<Loading />
			</>
		);
	}
};
