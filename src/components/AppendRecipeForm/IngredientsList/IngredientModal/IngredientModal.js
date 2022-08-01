import * as React from "react";
import {
  Autocomplete,
  Modal,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  alignItems: "center",
};

export const IngredientModal = (props) => {
  const handleClose = () => props.setModalOpenStatus(false);

  const existingIngredients = ["Lamb", "Chicken"];
  const existingMeasurements = ["g", "kg", "ml", "l"];

  return (
    <Modal
      open={props.modalOpenStatus}
      onClose={handleClose}
      aria-labelledby="ingredient add/edit model"
      aria-describedby="ingredient add/edit model"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add/edit Ingredient
        </Typography>
        <Autocomplete
          freeSolo
          disablePortal
          id="combo-box-demo"
          options={existingIngredients}
          sx={{ marginTop: "15px", width: "100%" }}
          renderInput={(params) => <TextField {...params} label="Ingredient" />}
        />
        <Box
          sx={{
            display: "flex",
            marginTop: "15px",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="quantity"
            label="Quantity"
            variant="outlined"
            sx={{ width: "60%" }}
          />
          <Autocomplete
            freeSolo
            disablePortal
            id="combo-box-demo"
            options={existingMeasurements}
            sx={{ width: "35%" }}
            renderInput={(params) => (
              <TextField {...params} label="Measurements" />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "15px",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
            sx={{ width: "45%" }}
          >
            Submit
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="reset"
            sx={{ width: "45%" }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
