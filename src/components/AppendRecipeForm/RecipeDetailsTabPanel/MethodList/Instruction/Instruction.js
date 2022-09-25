import {
  ListItem,
  IconButton,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const Instruction = (props) => {
  const instruction = props.instruction;
  const removeInstruction = props.removeInstruction;
  return (
    <ListItem
      key={instruction.id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete ingredient"
          onClick={() => removeInstruction(instruction.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemText
          id={instruction.id}
          primary={"Step " + instruction.instructionNumber}
          secondary={instruction.instruction}
        />
      </ListItemButton>
    </ListItem>
  );
};
