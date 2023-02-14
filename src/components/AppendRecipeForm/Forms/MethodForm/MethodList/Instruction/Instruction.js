import {
	ListItem,
	IconButton,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

export const Instruction = (props) => {
	const instruction = props.instruction;
	const index = props.index;
	const removeInstruction = props.removeInstruction;

	return (
		<ListItem
			key={index}
			secondaryAction={
				<IconButton
					edge="end"
					aria-label="delete ingredient"
					onClick={() => removeInstruction(index)}
				>
					<DeleteIcon />
				</IconButton>
			}
			disablePadding
		>
			<ListItemButton role={undefined} dense>
				<ListItemText
					id={index}
					primary={"Step " + (index + 1)}
					secondary={instruction.instruction}
				/>
			</ListItemButton>
		</ListItem>
	);
};

Instruction.propTypes = {
	instruction: PropTypes.object,
	index: PropTypes.number,
	removeInstruction: PropTypes.func,
};
