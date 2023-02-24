import { addImage } from "./addImage";
import { prismaMock } from "../../../singleton";
import { images } from "@prisma/client";

describe("addImage", () => {
	const mockImage: images = {
		imageID: 1,
		imageSource:
			"https%3A%2F%2Fwww.seriouseats.com%2Fthmb%2FWzQz05gt5witRGeOYKTcTqfe1gs%3D%2F1500x0%2Ffilters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29%2Fbutter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg",
		isLandscape: false,
		recipeID: 1,
	};

	beforeEach(() => {
		prismaMock.images.create.mockResolvedValue(mockImage);
	});

	it("should add the new image for recipe 1", async () => {
		const addedImage = await addImage(
			mockImage.imageSource,
			mockImage.isLandscape,
			mockImage.recipeID,
		);
		expect(addedImage).toEqual(mockImage);
	});

	it("should return undefined if blank is passed in for the image source", async () => {
		const addedImage = await addImage(
			"",
			mockImage.isLandscape,
			mockImage.recipeID,
		);
		expect(addedImage).toBeUndefined();
	});
});
