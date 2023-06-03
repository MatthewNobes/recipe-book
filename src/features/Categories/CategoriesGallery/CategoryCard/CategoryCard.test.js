import { CategoryCard } from "./CategoryCard";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("CategoryCard", () => {
	it("should load the correct category name", () => {
		const category = {
			id: 7,
			name: "Desserts",
			image:
				"https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
		};
		render(
			<BrowserRouter>
				<CategoryCard category={category} />
			</BrowserRouter>,
		);

		const categoryTitle = screen.getByText(category.name);
		expect(categoryTitle).toBeInTheDocument();
	});

	it("should load the correct category image", () => {
		const category = {
			id: 7,
			name: "Desserts",
			image:
				"https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
		};
		render(
			<BrowserRouter>
				<CategoryCard category={category} />
			</BrowserRouter>,
		);

		const categoryImage = screen.getByRole("img");
		expect(categoryImage.src).toBe(category.image);
	});
});
