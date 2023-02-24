import request from "supertest";
import app from "../../app";
import { prismaMock } from "../../singleton";
import { images } from "@prisma/client";

describe("POST /api/images/add/:imageSource/:isLandscape/:recipeID", () => {
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
	describe("successful circumstances", () => {
		it("should return the added image", async () => {
			const response = await request(app).post(
				"/api/images/add/" +
					mockImage.imageSource +
					"/" +
					mockImage.isLandscape +
					"/" +
					mockImage.recipeID,
			);

			expect(response.statusCode).toBe(201);
			expect(typeof response.body.data.imageID).toBe("number");
			expect(typeof response.body.data.imageSource).toBe("string");
			expect(typeof response.body.data.isLandscape).toBe("boolean");
			expect(typeof response.body.data.recipeID).toBe("number");
			expect(response.body).toStrictEqual({ data: mockImage });
		});
	});

	describe("unsuccessful circumstances", () => {
		it("should return 404 as a lack of parameter will fail to find the route", async () => {
			const response = await request(app).post(
				"/api/images/add/" +
					mockImage.imageSource +
					"/" +
					mockImage.isLandscape +
					"/",
			);

			expect(response.statusCode).toBe(404);
		});
	});
});
