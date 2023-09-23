import { List, ListItem, Fab, Typography, Tooltip } from "@mui/material";
import { Add } from "@mui/icons-material";
import MethodModal from "./MethodModal";
import { useState } from "react";
import Instruction from "./Instruction";
import PropTypes from "prop-types";

export const MethodList = ({
	instructionArray,
	removeInstruction,
	addInstruction,
}) => {
	const [modalOpenStatus, setModalOpenStatus] = useState(false);

	const openModal = () => {
		setModalOpenStatus(true);
	};

	return (
		<>
			<MethodModal
				modalOpenStatus={modalOpenStatus}
				setModalOpenStatus={setModalOpenStatus}
				operation={"Add"}
				addInstruction={addInstruction}
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
								removeInstruction={() => removeInstruction(index)}
							/>
						);
					})
				)}
				<ListItem>
					<Tooltip title={"Add instruction"} placement={"left"}>
						<Fab
							color="primary"
							size="small"
							aria-label="add"
							sx={{ marginLeft: "auto" }}
							onClick={() => openModal()}
						>
							<Add />
						</Fab>
					</Tooltip>
				</ListItem>
			</List>
		</>
	);
};

MethodList.propTypes = {
	instructionArray: PropTypes.array,
	removeInstruction: PropTypes.func,
	addInstruction: PropTypes.func,
};
