import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const allRecipes = await prisma.recipe.findMany();

  return allRecipes;
}

export const getAllRecipes = () => {
  let recipes;
  main()
    .catch((e) => {
      throw e;
    })
    .then((response) => {
      return response;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};
