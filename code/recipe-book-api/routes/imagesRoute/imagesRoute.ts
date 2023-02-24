import express from "express";
import { addImage } from "./addImage/addImage";

const router = express.Router();

/**
 * @swagger
 * /api/images/add/{imageSource}/{isLandscape}/{recipeID}:
 *   post:
 *     summary: Adds a new image
 *     description: Adds a new image
 *     tags:
 *       - Images
 *     parameters:
 *       - in: path
 *         name: imageSource
 *         required: true
 *         description: The encoded source of the image
 *         schema:
 *           type: string
 *       - in: path
 *         name: isLandscape
 *         required: true
 *         description: true or false
 *         schema:
 *           type: boolean
 *       - in: path
 *         name: recipeID
 *         required: true
 *         description: The ID of the recipe this iamge is for
 *         schema:
 *           type: number
 *     responses:
 *       201:
 *         description: Confirmation of the image added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     imageID:
 *                       type: integer
 *                       description: The ID of the image.
 *                       example: 1
 *                     imageSource:
 *                       type: string
 *                       description: The encoded source of the image
 *                       example: https%3A%2F%2Fwww.seriouseats.com%2Fthmb%2FWzQz05gt5witRGeOYKTcTqfe1gs%3D%2F1500x0%2Ffilters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29%2Fbutter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg
 *                     isLandscape:
 *                       type: boolean
 *                       description: Defines if the image should be displayed landscape or not
 *                       example: true
 *                     recipeID:
 *                       type: integer
 *                       description: The ID of the recipe the image is for.
 *                       example: 1
 */
router
	.route("/add/:imageSource/:isLandscape/:recipeID")
	.post(async (request, result) => {
		const imageSource: string = request.params.imageSource;
		const isLandscape: boolean =
			request.params.isLandscape === "true" ? true : false;
		const recipeID: number = parseInt(request.params.recipeID);

		try {
			const newImage = await addImage(imageSource, isLandscape, recipeID);
			if (newImage === undefined) {
				throw "Invalid parameters";
			}

			result.status(201);
			result.json({ data: newImage });
		} catch (error) {
			result.status(400);
			result.json({ data: error });
		}
	});

export default router;
