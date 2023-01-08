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
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useState } from "react";
// import { utf8Encode } from "../../utils";
import {
	AutoCompleteWrapper,
	TextfieldWrapper,
	SubmitButtonWrapper,
} from "../FormUI";
import { IngredientsList } from "./IngredientsList/IngredientsList";
import { MethodList } from "./MethodList/MethodList";

const BasicDetailsForm = (props) => {
	console.log("rerendered");
	const validationSchema = yup.object().shape({
		recipeName: yup.string().required("Name is required"),
		recipeDescription: yup.string().required("Description is required"),
		difficultyRating: yup.number(),
		recipePrepTime: yup.number().required("Prep time is required"),
		recipeCookTime: yup.number().required("Cook time is required"),
		recipeSource: yup.string(),
		servingNumber: yup.number().required("Serving number is required"),
		region: yup.number(),
		country: yup.number(),
		category: yup.number(),
	});

	// needs to be populated from the db
	const categories = [
		{ id: 1, label: "Appetisers" },
		{ id: 2, label: "Entrees" },
		{ id: 3, label: "Deserts" },
		{ id: 4, label: "Lunch" },
		{ id: 5, label: "Snacks" },
		{ id: 6, label: "Sauces" },
	];

	const countries = [
		{ id: 1, label: "British" },
		{ id: 2, label: "French" },
		{ id: 3, label: "Italian" },
		{ id: 4, label: "Russian" },
	];

	const regions = [
		{ id: 1, label: "Mediterranean" },
		{ id: 2, label: "North American" },
		{ id: 3, label: "Asian" },
		{ id: 4, label: "Lunch" },
		{ id: 5, label: "Snacks" },
		{ id: 6, label: "Sauces" },
	];

	const submitHandle = (values) => {
		props.setRecipeFn({
			recipeName: values.recipeName,
			recipeDescription: values.recipeDescription,
			difficultyRating: values.difficultyRating,
			recipePrepTime: values.recipePrepTime,
			recipeCookTime: values.recipeCookTime,
			recipeSource: values.recipeSource,
			servingNumber: values.servingNumber,
			regionID: values.region,
			countryID: values.country,
			categoryID: values.category,
		});
		props.handleNext();
	};

	return (
		<Formik
			initialValues={props.recipeValues}
			onSubmit={(values) => {
				submitHandle(values);
			}}
			validationSchema={validationSchema}
		>
			<Form>
				<Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
					<TextfieldWrapper
						name="recipeName"
						label="Name"
						required={true}
					></TextfieldWrapper>
					<TextfieldWrapper
						name="recipeDescription"
						label="Description"
						multiline={true}
						rows={4}
						required={true}
					></TextfieldWrapper>
					<TextfieldWrapper
						name="difficultyRating"
						label="Difficulty Rating"
						type="number"
					></TextfieldWrapper>
					<TextfieldWrapper
						name="recipePrepTime"
						label="Preparation time"
						type="number"
						required={true}
					></TextfieldWrapper>
					<TextfieldWrapper
						name="recipeCookTime"
						label="Cooking time"
						type="number"
						required={true}
					></TextfieldWrapper>
					<TextfieldWrapper
						name="recipeSource"
						label="Source URL"
					></TextfieldWrapper>
					<TextfieldWrapper
						name="servingNumber"
						label="Serving number"
						type="number"
						required={true}
					></TextfieldWrapper>
					<AutoCompleteWrapper
						name="region"
						label="Region"
						options={regions}
					></AutoCompleteWrapper>
					<AutoCompleteWrapper
						name="country"
						label="Country"
						options={countries}
					></AutoCompleteWrapper>
					<AutoCompleteWrapper
						name="category"
						label="Category"
						options={categories}
					></AutoCompleteWrapper>
				</Box>
				<Box sx={{ marginY: 2, float: "right" }}>
					<SubmitButtonWrapper sx={{ mt: 1, mr: 1 }}>Next</SubmitButtonWrapper>
				</Box>
			</Form>
		</Formik>
	);
};

const IngredientsForm = ({ setIngredients, ingredientsArray }) => {
	const removeIngredient = (idToRemove) => {
		const updatedIngredientsArray = ingredientsArray;
		updatedIngredientsArray.splice(idToRemove, 1);
		setIngredients([...updatedIngredientsArray]);
	};

	const addIngredient = (ingredientObject) => {
		setIngredients([...ingredientsArray, ingredientObject]);
	};

	return (
		<Box>
			<IngredientsList
				ingredientsArray={ingredientsArray}
				removeIngredient={removeIngredient}
				addIngredient={addIngredient}
			/>
		</Box>
	);
};

const MethodForm = ({ setInstructions, instructionsArray }) => {
	const addInstruction = (instructionToAdd) => {
		setInstructions([...instructionsArray, instructionToAdd]);
	};

	const removeInstruction = (idToRemove) => {
		const updatedInstructionsArray = instructionsArray;
		updatedInstructionsArray.splice(idToRemove, 1);
		setInstructions([...updatedInstructionsArray]);
	};

	return (
		<Box>
			<MethodList
				instructionArray={instructionsArray}
				addInstruction={addInstruction}
				removeInstruction={removeInstruction}
			/>
		</Box>
	);
};

export const AppendRecipeForm = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [recipe, setRecipe] = useState({
		recipeName: "",
		recipeDescription: "",
		difficultyRating: 0,
		recipePrepTime: 20,
		recipeCookTime: 20,
		recipeSource: "",
		servingNumber: 4,
		region: 1,
		country: 1,
		category: 1,
	});
	const [ingredients, setIngredients] = useState([]);
	const [instructions, setInstructions] = useState([]);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setRecipe({
			recipeName: "",
			recipeDescription: "",
			difficultyRating: 0,
			recipePrepTime: 20,
			recipeCookTime: 20,
			recipeSource: "",
			servingNumber: 4,
			region: 1,
			country: 1,
			category: 1,
		});
		setIngredients([]);
		setInstructions([]);
		setActiveStep(0);
	};

	const handleSubmit = () => {
		console.log("submit the stuff");
		console.log(recipe);
		console.log(ingredients);
		console.log(instructions);
		// all props need to be encoded
		// Will add the recipe, then navigate to /ViewRecipe/ID, id will be the id of the recipe just added
		// snackbar will be used to show it has been added
		// if it fails then will stay on the same form and produce an error snackbar alert
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
