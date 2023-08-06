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
import ResultsPane from "../ResultsPane";
import ques from "./questions.json";

export const RecommendRecipeForm = () => {
	const [answers, setAnswers] = useState(["", "", "", ""]);
	const [activeStep, setActiveStep] = useState(0);

	const questions = ques.questions;
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const saveResult = (questionID, answer) => {
		const newAnswerArray = answers;
		newAnswerArray[questionID] = answer;
		setAnswers(newAnswerArray);
	};

	return activeStep === questions.length ? (
		<ResultsPane answers={answers} resetForm={() => setActiveStep(0)} />
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
