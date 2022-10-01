import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getRecipeFromID = async (requestedRecipeID) => {
  const recipe = await prisma.recipe.findFirst({
    where: { recipeID: requestedRecipeID },
  });
  return recipe;
};
