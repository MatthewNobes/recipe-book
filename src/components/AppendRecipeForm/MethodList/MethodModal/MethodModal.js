import * as React from "react";
import { Modal, Typography, Box, TextField, Button } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  textAlign: "center",
  alignItems: "center",
};

const validationSchema = yup.object({
  instruction: yup
    .string("Enter a instruction")
    .required("An instruction is required"),
  instructionNumber: yup
    .number()
    .min(1, "Must be at least 1")
    .required("A quantity is required"),
});

export const MethodModal = (props) => {
  const instructionArray = props.instructionArray;
  const handleClose = () => props.setModalOpenStatus(false);

  const clearForm = () => {
    formik.setFieldValue("instruction", formik.initialValues.ingredient);
    formik.setFieldValue("instructionNumber", formik.initialValues.measurement);
  };

  const formik = useFormik({
    initialValues: {
      instructionNumber: NaN,
      instruction: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newID = instructionArray[instructionArray.length - 1].id + 1;
      props.addInstruction({
        id: newID,
        instructionNumber: values.instructionNumber,
        instruction: values.instruction,
      });

      clearForm();
      handleClose();
    },
  });

  return (
    <Modal
      open={props.modalOpenStatus}
      onClose={handleClose}
      aria-labelledby="instruction add/edit model"
      aria-describedby="instruction add/edit model"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Add/edit an instruction
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              marginTop: "15px",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <TextField
              id="instructionNumber"
              label="instructionNumber"
              type="number"
              variant="outlined"
              error={
                formik.touched.instructionNumber &&
                Boolean(formik.errors.instructionNumber)
              }
              helperText={
                formik.touched.instructionNumber &&
                formik.errors.instructionNumber
              }
              value={formik.values.instructionNumber}
              onChange={formik.handleChange}
              sx={{ width: "25%" }}
            />
            <TextField
              id="instruction"
              label="instruction"
              multiline
              variant="outlined"
              error={
                formik.touched.instruction && Boolean(formik.errors.instruction)
              }
              helperText={
                formik.touched.instruction && formik.errors.instruction
              }
              value={formik.values.instruction}
              onChange={formik.handleChange}
              sx={{ width: "60%" }}
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
              onClick={() => clearForm()}
              sx={{ width: "45%" }}
            >
              Reset
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};
