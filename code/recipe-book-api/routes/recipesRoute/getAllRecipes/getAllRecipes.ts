import prisma from "../../../client";
import { recipes } from "@prisma/client";

export const getAllRecipes = async (): Promise<recipes[]> => {
	const recipes = await prisma.recipes.findMany({
		include: {
			countries: true,
			categories: true,
			regions: true,
			images: true,
		},
	});
	return recipes;
};
