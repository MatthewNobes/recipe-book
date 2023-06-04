import { GenericImageCard } from "./GenericImageCard";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("GenericImageCard", () => {
	it("should load the correct name", () => {
		const item = {
			id: 7,
			name: "Desserts",
			image:
				"https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
		};
		render(
			<BrowserRouter>
				<GenericImageCard id={item.id} title={item.name} image={item.image} />
			</BrowserRouter>,
		);

		const itemTitle = screen.getByText(item.name);
		expect(itemTitle).toBeInTheDocument();
	});

	it("should load the correct image", () => {
		const item = {
			id: 7,
			name: "Desserts",
			image:
				"https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-1024x683.jpeg",
		};
		render(
			<BrowserRouter>
				<GenericImageCard id={item.id} title={item.name} image={item.image} />
			</BrowserRouter>,
		);

		const itemImage = screen.getByRole("img");
		expect(itemImage.src).toBe(item.image);
	});
});
