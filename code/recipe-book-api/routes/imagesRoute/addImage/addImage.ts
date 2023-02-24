import { images } from "@prisma/client";
import prisma from "../../../client";

export const addImage = async (
	imageSource: images["imageSource"],
	isLandscape: images["isLandscape"],
	recipeID: images["recipeID"],
): Promise<images | undefined> => {
	if (imageSource === "") {
		return undefined;
	}
	const newImage = await prisma.images.create({
		data: {
			imageSource: imageSource,
			isLandscape: isLandscape,
			recipeID: recipeID,
		},
	});

	return newImage;
};
