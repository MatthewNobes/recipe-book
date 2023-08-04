import {
	Box,
	Button,
	Typography,
	Stepper,
	Step,
	StepContent,
	StepLabel,
} from "@mui/material";
import { useState } from "react";

export const RecommendRecipeForm = () => {
	const [answers, setAnswers] = useState(["", "", "", ""]);
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const questions = [
		{
			question: "What type of meal would you like?",
			options: ["Small dish", "Dinner", "Snack", "Drink"],
		},
		{
			question: "How much time do you have?",
			options: [
				"Quick meal (Less than 30 mins)",
				"More time (Less than 1hr)",
				"Longer meal (Less than 1:30hr)",
				"More effort (More than 1:30hr)",
				"Any",
			],
		},
		{
			question: "Is there any particular type of food you fancy?",
			options: [
				"Mediterranean",
				"American",
				"Asian",
				"Northern European",
				"Any",
			],
		},
		{
			question: "Any dietary restrictions?",
			options: ["None", "Vegetarian ", "Vegan"],
		},
	];

	const saveResult = (questionID, answer) => {
		const newAnswerArray = answers;
		newAnswerArray[questionID] = answer;
		setAnswers(newAnswerArray);
	};

	return activeStep === questions.length ? (
		<Typography>Results pane will go here</Typography>
	) : (
		<Stepper activeStep={activeStep} orientation="vertical">
			{questions.map((question, index) => {
				return (
					<Step key={index}>
						<StepLabel
							optional={
								index === 3 ? (
									<Typography variant="caption">Last step</Typography>
								) : null
							}
						>
							{question.question}
						</StepLabel>
						<StepContent>
							<Box
								sx={{
									display: "flex",
									gap: 2,
									flexWrap: "wrap",
									justifyContent: "center",
								}}
							>
								{question.options.map((option, optionIndex) => {
									return (
										<Button
											key={optionIndex}
											onClick={() => {
												saveResult(index, option);
												handleNext();
											}}
											variant="outlined"
											sx={{ py: 2, px: 5 }}
										>
											{option}
										</Button>
									);
								})}
							</Box>
							<Box sx={{ mb: 2, float: "right" }}>
								{index === 0 ? (
									<></>
								) : (
									<Button
										disabled={index === 0}
										onClick={handleBack}
										sx={{ mt: 1, mr: 1 }}
									>
										Back
									</Button>
								)}
							</Box>
						</StepContent>
					</Step>
				);
			})}
		</Stepper>
	);
};
