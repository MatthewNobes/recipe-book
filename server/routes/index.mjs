import recipesRouter from "./recipesRoute/recipesRoute.mjs";
import ingredientsRouter from "./ingredientsRoute/ingredientsRoute.mjs";
import express from "express";
let router = express.Router();

router.use("/recipes", recipesRouter);
router.use("/ingredients", ingredientsRouter);

export default router;
