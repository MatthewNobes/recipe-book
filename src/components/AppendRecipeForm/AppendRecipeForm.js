/* eslint-disable react/prop-types */
import {
	Typography,
	Button,
	Box,
	Stepper,
	Step,
	StepLabel,
	Paper,
	StepContent,
} from "@mui/material";
import { BasicDetailsForm, IngredientsForm, MethodForm } from "./Forms";
import { useState } from "react";
import { addRecipe } from "./addRecipe/addRecipe";
import { useNavigate } from "react-router-dom";

/**
 * The form experience to add or edit a recipe. Pass valuesToEdit if this is form is being used to edit a recipe, if nothing is passed, it will assume the forms purpose is to add a recipe
 * @param {valuesToEdit} props valuesToEdit contains the recipeValues that will be edited
 * @returns
 */
export const AppendRecipeForm = (props) => {
	const navigate = useNavigate();

	let initialRecipeValues = {
		recipeName: "",
		recipeDescription: "",
		difficultyRating: 0,
		recipePrepTime: 0,
		recipeCookTime: 0,
		recipeSource: "",
		servingNumber: 4,
		region: 1,
		country: 1,
		category: 1,
	};

	if (props.valuesToEdit) {
		initialRecipeValues = {
			recipeName: props.valuesToEdit.recipeName,
			recipeDescription: props.valuesToEdit.recipeDescription,
			difficultyRating: props.valuesToEdit.difficultyRating,
			recipePrepTime: props.valuesToEdit.recipePrepTime,
			recipeCookTime: props.valuesToEdit.recipeCookTime,
			recipeSource: props.valuesToEdit.recipeSource,
			servingNumber: props.valuesToEdit.servingNumber,
			region: props.valuesToEdit.region,
			country: props.valuesToEdit.country,
			category: props.valuesToEdit.category,
		};
	}

	const [activeStep, setActiveStep] = useState(0);
	const [recipe, setRecipe] = useState(initialRecipeValues);
	const [ingredients, setIngredients] = useState([]);
	const [instructions, setInstructions] = useState([]);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setRecipe(initialRecipeValues);
		setIngredients([]);
		setInstructions([]);
		setActiveStep(0);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const ingredientsArrayToSubmit = ingredients.map((ingredient) => {
			return {
				ingredientName: ingredient.ingredient,
				ingredientDescription: "null",
				ingredientInfoURL: "null",
				measurementTypeID: ingredient.measurement,
				measurementSize: ingredient.quantity,
			};
		});

		const instructionsArrayToSubmit = instructions.map((instruction, index) => {
			return {
				stepText: instruction.instruction,
				stepNumber: index + 1,
			};
		});

		const id = await addRecipe(
			recipe,
			ingredientsArrayToSubmit,
			instructionsArrayToSubmit,
		);

		if (Number.isInteger(id)) {
			navigate("/ViewRecipe/" + id);
		} else {
			console.log("Could not add recipe");
		}
	};

	return (
		<Box
			sx={{
				paddingX: 1,
				paddingTop: 1,
				marginBottom: 10,
				maxWidth: "600px",
				marginX: "auto",
			}}
		>
			<Stepper activeStep={activeStep} orientation="vertical">
				<Step>
					<StepLabel>Basic information</StepLabel>
					<StepContent>
						<BasicDetailsForm
							setRecipeFn={setRecipe}
							handleNext={handleNext}
							recipeValues={recipe}
						/>
					</StepContent>
				</Step>
				<Step>
					<StepLabel>Add ingredients</StepLabel>
					<StepContent>
						<IngredientsForm
							setIngredients={setIngredients}
							ingredientsArray={ingredients}
						/>
						<Box sx={{ mb: 2, float: "right" }}>
							<Button
								variant="contained"
								onClick={handleNext}
								sx={{ mt: 1, mr: 1 }}
							>
								Next
							</Button>
							<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
								Back
							</Button>
						</Box>
					</StepContent>
				</Step>
				<Step>
					<StepLabel
						optional={<Typography variant="caption">Last step</Typography>}
					>
						Add method
					</StepLabel>
					<StepContent>
						<MethodForm
							setInstructions={setInstructions}
							instructionsArray={instructions}
						/>
						<Box sx={{ mb: 2, float: "right" }}>
							<Button
								variant="contained"
								onClick={handleNext}
								sx={{ mt: 1, mr: 1 }}
							>
								Finish
							</Button>
							<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
								Back
							</Button>
						</Box>
					</StepContent>
				</Step>
			</Stepper>
			{activeStep === 3 && (
				<Paper square elevation={0} sx={{ p: 3 }}>
					<Typography>
						All steps completed - you&apos;re ready to submit the recipe
					</Typography>
					<Button
						onClick={handleSubmit}
						sx={{ mt: 1, mr: 1 }}
						variant="contained"
					>
						Submit
					</Button>
					<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
						Reset
					</Button>
				</Paper>
			)}
		</Box>
	);
};
