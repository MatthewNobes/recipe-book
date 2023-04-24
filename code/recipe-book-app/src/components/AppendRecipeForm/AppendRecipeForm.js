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
import { addRecipe } from "../../data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * The form experience to add or edit a recipe. Pass valuesToEdit if this is form is being used to edit a recipe, if nothing is passed, it will assume the forms purpose is to add a recipe
 * @param {valuesToEdit} props valuesToEdit contains the recipeValues that will be edited
 * @returns
 */
export const AppendRecipeForm = (props) => {
	const navigate = useNavigate();

	let initialRecipeValues = {
		name: "",
		description: "",
		difficulty_rating: 0,
		prep_time: 0,
		cook_time: 0,
		source: "",
		serving_number: 4,
		country: "",
		keywords: [],
		steps: [],
		ingredients: [],
		images: [],
	};

	if (props.valuesToEdit) {
		initialRecipeValues = {
			name: props.valuesToEdit.name,
			description: props.valuesToEdit.description,
			difficulty_rating: props.valuesToEdit.difficulty_rating,
			prep_time: props.valuesToEdit.prep_time,
			cook_time: props.valuesToEdit.cook_time,
			source: props.valuesToEdit.source,
			serving_number: props.valuesToEdit.serving_number,
			country: props.valuesToEdit.country,
			keywords: props.valuesToEdit.keywords,
			steps: props.valuesToEdit.steps,
			ingredients: props.valuesToEdit.ingredients,
			images: props.valuesToEdit.images,
		};
	}

	const [activeStep, setActiveStep] = useState(0);
	const [recipe, setRecipe] = useState(initialRecipeValues);
	const [ingredients, setIngredients] = useState([]);
	const [instructions, setInstructions] = useState([]);
	const [images, setImages] = useState([]);

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

		const ingredientsToSubmit = ingredients.map((ingredient) => {
			return JSON.stringify(ingredient);
		});

		const imagesToSubmit = images.map((image) => {
			return image.imageSource;
		});

		const instructionsToSubmit = instructions.map((instruction) => {
			return instruction.instruction;
		});

		const valuesToSubmit = {
			...recipe,
			ingredients: ingredientsToSubmit,
			steps: instructionsToSubmit,
			images: imagesToSubmit,
			keywords: [],
		};

		const newRecipeID = await addRecipe(valuesToSubmit);

		if (Number.isInteger(newRecipeID)) {
			navigate("/ViewRecipe/" + newRecipeID);
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
					<StepLabel>Add method</StepLabel>
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
						Add images
					</StepLabel>
					<StepContent>
						<ImageForm imageArray={images} setImages={setImages} />
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
			{activeStep === 4 && (
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

AppendRecipeForm.propTypes = {
	valuesToEdit: PropTypes.object,
};
