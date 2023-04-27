import { ImageGallery } from "./ImageGallery";
import { render, screen } from "@testing-library/react";
import { utf8Decode } from "../../utils";
import { BrowserRouter } from "react-router-dom";

describe("Image gallery", () => {
	const recipes = [
		{
			recipeID: 1,
			recipeName: "Chicken pie",
			recipeDescription: "A nice chicken pie",
			servingNumber: 4,
			recipeSource: "null",
			categoryID: 1,
			countryID: 1,
			regionID: 1,
			recipeDifficultyRating: 4,
			recipeCookTime: "58",
			recipePrepTime: "45",
			countries: {
				countryID: 1,
				country: "Italy",
			},
			categories: {
				categoryID: 1,
				category: "Bread",
			},
			regions: {
				regionID: 1,
				region: "Asia",
			},
			images: [
				{
					imageID: 1,
					imageSource:
						"https%3A%2F%2Fproperfoodie.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fsquare-Steak-and-chips-8-500x500.jpg",
					isLandscape: false,
					recipeID: 1,
				},
			],
		},
		{
			recipeID: 3,
			recipeName: "Chicken pie",
			recipeDescription: "Testing",
			servingNumber: 4,
			recipeSource: "null",
			categoryID: 1,
			countryID: 1,
			regionID: 1,
			recipeDifficultyRating: 4,
			recipeCookTime: "58",
			recipePrepTime: "45",
			countries: {
				countryID: 1,
				country: "Italy",
			},
			categories: {
				categoryID: 1,
				category: "Bread",
			},
			regions: {
				regionID: 1,
				region: "Asia",
			},
			images: [
				{
					imageID: 4,
					imageSource:
						"https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0511%2F1074%2F0162%2Fproducts%2FChoppedChorizo_1200x1200.jpg",
					isLandscape: true,
					recipeID: 3,
				},
			],
		},
		{
			recipeID: 4,
			recipeName: "Chicken pie",
			recipeDescription: "Not sure what to put here",
			servingNumber: 4,
			recipeSource: "null",
			categoryID: 1,
			countryID: 1,
			regionID: 1,
			recipeDifficultyRating: 4,
			recipeCookTime: "58",
			recipePrepTime: "45",
			countries: {
				countryID: 1,
				country: "Italy",
			},
			categories: {
				categoryID: 1,
				category: "Bread",
			},
			regions: {
				regionID: 1,
				region: "Asia",
			},
			images: [
				{
					imageID: 5,
					imageSource:
						"https%3A%2F%2Fwww.foodandwine.com%2Fthmb%2F8YAIANQTZnGpVWj2XgY0dYH1V4I%3D%2F1500x0%2Ffilters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29%2Fspicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
					isLandscape: true,
					recipeID: 4,
				},
			],
		},
		{
			recipeID: 5,
			recipeName: "Chicken pie",
			recipeDescription: "Running out of test phrases",
			servingNumber: 4,
			recipeSource: "null",
			categoryID: 1,
			countryID: 1,
			regionID: 1,
			recipeDifficultyRating: 4,
			recipeCookTime: "58",
			recipePrepTime: "45",
			countries: {
				countryID: 1,
				country: "Italy",
			},
			categories: {
				categoryID: 1,
				category: "Bread",
			},
			regions: {
				regionID: 1,
				region: "Asia",
			},
			images: [
				{
					imageID: 6,
					imageSource:
						"https%3A%2F%2Fwww.kitchensanctuary.com%2Fwp-content%2Fuploads%2F2018%2F09%2FChicken-Pot-Pie-square-FS-2.jpg",
					isLandscape: true,
					recipeID: 5,
				},
			],
		},
		{
			recipeID: 6,
			recipeName: "Chicken pie",
			recipeDescription: "Something else",
			servingNumber: 4,
			recipeSource: "null",
			categoryID: 1,
			countryID: 1,
			regionID: 1,
			recipeDifficultyRating: 4,
			recipeCookTime: "58",
			recipePrepTime: "45",
			countries: {
				countryID: 1,
				country: "Italy",
			},
			categories: {
				categoryID: 1,
				category: "Bread",
			},
			regions: {
				regionID: 1,
				region: "Asia",
			},
			images: [
				{
					imageID: 7,
					imageSource:
						"https%3A%2F%2Fimages.immediate.co.uk%2Fproduction%2Fvolatile%2Fsites%2F30%2F2020%2F08%2F2017-09-01-gfo11-1217bestever17623-e2070f0.jpg%3Fquality%3D90%26webp%3Dtrue%26resize%3D400%2C363",
					isLandscape: true,
					recipeID: 6,
				},
			],
		},
		{
			recipeID: 7,
			recipeName: "Chicken pie",
			recipeDescription: "Please send more test phrases",
			servingNumber: 4,
			recipeSource: "null",
			categoryID: 1,
			countryID: 1,
			regionID: 1,
			recipeDifficultyRating: 4,
			recipeCookTime: "58",
			recipePrepTime: "45",
			countries: {
				countryID: 1,
				country: "Italy",
			},
			categories: {
				categoryID: 1,
				category: "Bread",
			},
			regions: {
				regionID: 1,
				region: "Asia",
			},
			images: [
				{
					imageID: 8,
					imageSource:
						"https%3A%2F%2Ftastesbetterfromscratch.com%2Fwp-content%2Fuploads%2F2020%2F09%2FSpicy-Chicken-Soup-2-500x500.jpg",
					isLandscape: true,
					recipeID: 7,
				},
			],
		},
		{
			recipeID: 8,
			recipeName: "Chicken pie",
			recipeDescription: "Hello world",
			servingNumber: 4,
			recipeSource: "null",
			categoryID: 1,
			countryID: 1,
			regionID: 1,
			recipeDifficultyRating: 4,
			recipeCookTime: "58",
			recipePrepTime: "45",
			countries: {
				countryID: 1,
				country: "Italy",
			},
			categories: {
				categoryID: 1,
				category: "Bread",
			},
			regions: {
				regionID: 1,
				region: "Asia",
			},
			images: [
				{
					imageID: 9,
					imageSource:
						"https%3A%2F%2Fwww.lemontreedwelling.com%2Fwp-content%2Fuploads%2F2020%2F08%2Fchicken-kiev-featured.jpg",
					isLandscape: true,
					recipeID: 8,
				},
			],
		},
		{
			recipeID: 9,
			recipeName: "Chicken pie",
			recipeDescription: "Testing 123",
			servingNumber: 4,
			recipeSource: "null",
			categoryID: 1,
			countryID: 1,
			regionID: 1,
			recipeDifficultyRating: 4,
			recipeCookTime: "58",
			recipePrepTime: "45",
			countries: {
				countryID: 1,
				country: "Italy",
			},
			categories: {
				categoryID: 1,
				category: "Bread",
			},
			regions: {
				regionID: 1,
				region: "Asia",
			},
			images: [
				{
					imageID: 10,
					imageSource:
						"https%3A%2F%2Fimg.taste.com.au%2Fuq5uo4mA%2Ftaste%2F2016%2F11%2Fchicken-fajitas-98151-1.jpeg",
					isLandscape: true,
					recipeID: 9,
				},
			],
		},
	];
	it("should load the gallery with the supplied images", () => {
		render(
			<BrowserRouter>
				<ImageGallery recipes={recipes} howManyToDisplay={8} />
			</BrowserRouter>,
		);

		recipes.forEach((recipe) => {
			const image = screen.getByAltText(utf8Decode(recipe.recipeDescription));
			expect(image).toBeInTheDocument();
		});
	});

	it("should only load the first two images from the recipe array", () => {
		render(
			<BrowserRouter>
				<ImageGallery recipes={recipes} howManyToDisplay={2} />
			</BrowserRouter>,
		);

		const imageOne = screen.getByAltText(
			utf8Decode(recipes[0].recipeDescription),
		);
		expect(imageOne).toBeInTheDocument();
		const imageTwo = screen.getByAltText(
			utf8Decode(recipes[1].recipeDescription),
		);
		expect(imageTwo).toBeInTheDocument();
	});
});
