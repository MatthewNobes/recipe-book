import { List, ListItem, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MethodModal from "./MethodModal";
import { useState } from "react";
import Instruction from "./Instruction";

export const MethodList = (props) => {
	const instructionArray = props.instructionArray;

	const [modalOpenStatus, setModalOpenStatus] = useState(false);

	const openModal = () => {
		setModalOpenStatus(true);
	};

	const removeInstruction = (instructionID) => {
		props.removeInstruction(instructionID);
	};
	console.log(instructionArray);

	return (
		<>
			<MethodModal
				modalOpenStatus={modalOpenStatus}
				setModalOpenStatus={setModalOpenStatus}
				instructionArray={instructionArray}
				addInstruction={props.addInstruction}
			/>
			<List sx={{ width: "100%", bgcolor: "background.paper" }}>
				{instructionArray.length === 0 ? (
					<Typography>No instructions</Typography>
				) : (
					instructionArray.map((instruction, index) => {
						return (
							<Instruction
								key={index}
								instruction={instruction}
								index={index}
								removeInstruction={removeInstruction}
							/>
						);
					})
				)}
				<ListItem>
					<Fab
						color="primary"
						size="small"
						aria-label="add"
						sx={{ marginLeft: "auto" }}
						onClick={() => openModal()}
					>
						<AddIcon />
					</Fab>
				</ListItem>
			</List>
		</>
	);
};
