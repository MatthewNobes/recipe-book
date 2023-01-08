import { Box } from "@mui/material";
import { MethodList } from "./MethodList/MethodList";

export const MethodForm = ({ setInstructions, instructionsArray }) => {
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
