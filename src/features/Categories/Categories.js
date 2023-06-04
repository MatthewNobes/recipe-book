import { Header, Loading, Page } from "../../components";
import { CategoriesGallery } from "./CategoriesGallery/CategoriesGallery";
import { getAllCategories } from "../../data";
import { useState, useEffect } from "react";
import { ViewAllButton } from "./ViewAllButton/ViewAllButton";
import { SearchBar } from "../../components";
import { Box } from "@mui/material";

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
					<SearchBar />
					<Box sx={{ mr: 2, mt: 2 }}>
						<ViewAllButton />
					</Box>
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
