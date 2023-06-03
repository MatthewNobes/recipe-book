import { useNavigate } from "react-router-dom";
import { Header, Page } from "../../components";
import { CategoriesGallery } from "./CategoriesGallery/CategoriesGallery";

export const Categories = () => {
	const navigate = useNavigate();
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
	];

	return (
		<>
			<Header headerText="Categories" />
			<Page>
				<CategoriesGallery categories={cat} />
			</Page>
		</>
	);
};
