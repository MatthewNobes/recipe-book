import { Header, Loading, Page } from "../../components";
import { CategoriesGallery } from "./CategoriesGallery/CategoriesGallery";
import { getAllCategories } from "../../data";
import { useState, useEffect } from "react";

export const Categories = () => {
	const [categories, setCategories] = useState([]);

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
