/* eslint-disable camelcase */
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
import {
	BasicDetailsForm,
	IngredientsForm,
	MethodForm,
	ImageForm,
} from "./Forms";
import { useState } from "react";
import { addRecipe, updateRecipe } from "../../data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToast } from "../../store/slices/toastSlice/toastSlice";
import PropTypes from "prop-types";
import { AdditionalInfoForm } from "./Forms/AdditionalInfoForm/AdditionalInfoForm";

/**
 * The form experience to add or edit a recipe. Pass valuesToEdit if this is form is being used to edit a recipe, if nothing is passed, it will assume the forms purpose is to add a recipe
 * @param {valuesToEdit} props valuesToEdit contains the recipeValues that will be edited
 * @returns JSX Recipe form system
 */
export const RecipeForm = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const formType = props.valuesToEdit ? "edit" : "add";

	let initialRecipeValues = {
		name: "",
		description: "",
		difficulty_rating: 0,
		prep_time: 0,
		cook_time: 0,
		source: "",
		serving_number: 4,
		country: "",
		category: "",
		region: "",
		keywords: [],
		steps: [],
		ingredients: [],
		images: [],
		notes: [],
		vegStatus: "",
	};

	if (formType === "edit") {
		initialRecipeValues = {
			name: props.valuesToEdit.name,
			description: props.valuesToEdit.description,
			difficulty_rating: props.valuesToEdit.difficulty_rating,
			prep_time: props.valuesToEdit.prep_time,
			cook_time: props.valuesToEdit.cook_time,
			source: props.valuesToEdit.source,
			serving_number: props.valuesToEdit.serving_number,
			country: props.valuesToEdit.country,
			category: props.valuesToEdit.category,
			region: props.valuesToEdit.region,
			keywords: props.valuesToEdit.keywords,
			notes: props.valuesToEdit.notes,
			steps: props.valuesToEdit.steps,
			ingredients: props.valuesToEdit.ingredients,
			images: props.valuesToEdit.images,
			vegStatus: props.valuesToEdit.vegStatus,
		};
	}

	const [activeStep, setActiveStep] = useState(0);
	const [recipe, setRecipe] = useState(initialRecipeValues);
	const [ingredients, setIngredients] = useState(
		initialRecipeValues.ingredients,
	);
	const [steps, setSteps] = useState(initialRecipeValues.steps);
	const [images, setImages] = useState(initialRecipeValues.images);
	const [notes, setNotes] = useState(initialRecipeValues.notes);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setRecipe(initialRecipeValues);
		setIngredients(initialRecipeValues.ingredients);
		setSteps(initialRecipeValues.steps);
		setImages(initialRecipeValues.images);
		setActiveStep(0);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const ingredientsToSubmit = ingredients.map((ingredient) => {
			return JSON.stringify(ingredient);
		});

		const valuesToSubmit = {
			...recipe,
			ingredients: ingredientsToSubmit,
			steps: steps,
			images: images,
			notes: notes,
		};

		let id =
			formType === "add"
				? await addRecipe(valuesToSubmit)
				: await updateRecipe(props.idToEdit, valuesToSubmit);

		if (Number.isInteger(id)) {
			dispatch(
				setToast({
					message: `Recipe ${formType}ed`,
					alertType: "success",
					isOpen: true,
				}),
			);
			navigate("/ViewRecipe/" + id);
		} else {
			dispatch(
				setToast({
					message: `Could not ${formType} recipe`,
					alertType: "error",
					isOpen: true,
				}),
			);
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
							keywords={initialRecipeValues.keywords}
						/>
					</StepContent>
				</Step>
				<Step>
					<StepLabel>Ingredients</StepLabel>
					<StepContent>
						<IngredientsForm
							setIngredients={setIngredients}
							ingredientsArray={ingredients}
						/>
						<Box sx={{ mb: 2, float: "right" }}>
							<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
								Back
							</Button>
							<Button
								variant="contained"
								onClick={handleNext}
								sx={{ mt: 1, mr: 1 }}
							>
								Next
							</Button>
						</Box>
					</StepContent>
				</Step>
				<Step>
					<StepLabel>Method</StepLabel>
					<StepContent>
						<MethodForm setInstructions={setSteps} instructionsArray={steps} />
						<Box sx={{ mb: 2, float: "right" }}>
							<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
								Back
							</Button>
							<Button
								variant="contained"
								onClick={handleNext}
								sx={{ mt: 1, mr: 1 }}
							>
								Next
							</Button>
						</Box>
					</StepContent>
				</Step>
				<Step>
					<StepLabel>Additional Information</StepLabel>
					<StepContent>
						<AdditionalInfoForm setNotes={setNotes} notes={notes} />
						<Box sx={{ mb: 2, float: "right" }}>
							<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
								Back
							</Button>
							<Button
								variant="contained"
								onClick={handleNext}
								sx={{ mt: 1, mr: 1 }}
							>
								Next
							</Button>
						</Box>
					</StepContent>
				</Step>
				<Step>
					<StepLabel
						optional={<Typography variant="caption">Last step</Typography>}
					>
						Images
					</StepLabel>
					<StepContent>
						<ImageForm imageArray={images} setImages={setImages} />
						<Box sx={{ mb: 2, float: "right" }}>
							<Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
								Back
							</Button>
							<Button
								variant="contained"
								onClick={handleNext}
								sx={{ mt: 1, mr: 1 }}
							>
								Finish
							</Button>
						</Box>
					</StepContent>
				</Step>
			</Stepper>
			{activeStep === 5 && (
				<Paper square elevation={0} sx={{ p: 3 }}>
					<Typography>
						All done - you&apos;re ready to submit the recipe
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

RecipeForm.propTypes = {
	valuesToEdit: PropTypes.object,
	idToEdit: PropTypes.number,
};
