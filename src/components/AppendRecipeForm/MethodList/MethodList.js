import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Fab,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import MethodModal from "./MethodModal";
import { useState } from "react";

export const MethodList = (props) => {
  const instructionArray = props.instructionArray;

  const [modalOpenStatus, setModalOpenStatus] = useState(false);

  const openModal = () => {
    setModalOpenStatus(true);
  };

  const removeInstruction = (instructionID) => {
    props.removeInstruction(instructionID);
  };

  return (
    <>
      <Typography variant="h4" component="div">
        Methodology
      </Typography>
      <MethodModal
        modalOpenStatus={modalOpenStatus}
        setModalOpenStatus={setModalOpenStatus}
        instructionArray={instructionArray}
        addInstruction={props.addInstruction}
      />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {instructionArray.map((instruction) => {
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
                  primary={
                    instruction.instructionNumber +
                    ". " +
                    instruction.instruction
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
        <Fab
          color="primary"
          size="small"
          aria-label="add"
          sx={{ float: "right", marginRight: "5px" }}
          onClick={() => openModal()}
        >
          <AddIcon />
        </Fab>
      </List>
    </>
  );
};
