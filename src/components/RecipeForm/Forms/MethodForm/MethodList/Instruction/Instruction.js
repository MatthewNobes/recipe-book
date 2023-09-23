import {
	ListItem,
	IconButton,
	ListItemButton,
	ListItemText,
	Tooltip,
} from "@mui/material";
import PropTypes from "prop-types";
import { Clear } from "@mui/icons-material";

export const Instruction = ({ instruction, index, removeInstruction }) => {
	return (
		<ListItem
			key={index}
			secondaryAction={
				<Tooltip title={"Remove instruction"} placement={"left"}>
					<IconButton
						edge="end"
						aria-label="remove instruction"
						onClick={() => removeInstruction(index)}
					>
						<Clear />
					</IconButton>
				</Tooltip>
			}
			disablePadding
		>
			<ListItemButton role={undefined} dense>
				<ListItemText
					id={index}
					primary={"Step " + (index + 1)}
					secondary={instruction}
				/>
			</ListItemButton>
		</ListItem>
	);
};

Instruction.propTypes = {
	instruction: PropTypes.string,
	index: PropTypes.number,
	removeInstruction: PropTypes.func,
};
