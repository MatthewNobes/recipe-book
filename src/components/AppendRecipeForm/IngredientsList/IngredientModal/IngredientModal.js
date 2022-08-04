import * as React from "react";
import {
  Autocomplete,
  Modal,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
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
  ingredient: yup
    .string("Enter a ingredient")
    .required("An ingredient is required"),
  measurement: yup.string("Enter a measurement"),
  ingredientQuantity: yup
    .number()
    .min(0.1, "Must be at least 0.1")
    .required("A quantity is required"),
});

export const IngredientModal = (props) => {
  const ingredientsArray = props.ingredientsArray;
  const handleClose = () => props.setModalOpenStatus(false);

  //These two will be replaced with calls to the database
  const existingIngredients = ["Lamb", "Chicken"];
  const existingMeasurements = ["g", "kg", "ml", "l"];

  const clearForm = () => {
    formik.setFieldValue("ingredient", formik.initialValues.ingredient);
    formik.setFieldValue("measurement", formik.initialValues.measurement);
    formik.setFieldValue(
      "ingredientQuantity",
      formik.initialValues.ingredientQuantity
    );
  };

  const formik = useFormik({
    initialValues: {
      ingredient: "",
      measurement: "",
      ingredientQuantity: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newID = ingredientsArray[ingredientsArray.length - 1].id + 1;
      props.addIngredient({
        id: newID,
        ingredient: values.ingredient,
        quantity: values.ingredientQuantity,
        measurement: values.measurement,
      });

      clearForm();
      handleClose();
    },
  });

  return (
    <Modal
      open={props.modalOpenStatus}
      onClose={handleClose}
      aria-labelledby="ingredient add/edit model"
      aria-describedby="ingredient add/edit model"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Add/edit Ingredient
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Autocomplete
            freeSolo
            id="ingredient"
            name="ingredient"
            options={existingIngredients}
            value={formik.values.ingredient}
            onChange={(e, value) => formik.setFieldValue("ingredient", value)}
            error={
              formik.touched.ingredient && Boolean(formik.errors.ingredient)
            }
            sx={{ marginTop: "15px", width: "100%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Ingredient"
                error={
                  formik.touched.ingredient && Boolean(formik.errors.ingredient)
                }
                helperText={
                  formik.touched.ingredient && formik.errors.ingredient
                }
              />
            )}
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
              id="ingredientQuantity"
              label="Quantity"
              type="number"
              variant="outlined"
              error={
                formik.touched.ingredientQuantity &&
                Boolean(formik.errors.ingredientQuantity)
              }
              helperText={
                formik.touched.ingredientQuantity &&
                formik.errors.ingredientQuantity
              }
              value={formik.values.ingredientQuantity}
              onChange={formik.handleChange}
              sx={{ width: "60%" }}
            />
            <Autocomplete
              freeSolo
              disablePortal
              id="measurements"
              options={existingMeasurements}
              value={formik.values.measurement}
              error={
                formik.touched.measurement && Boolean(formik.errors.measurement)
              }
              onChange={(e, value) =>
                formik.setFieldValue("measurement", value)
              }
              sx={{ width: "35%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="measurements"
                  name="measurements"
                  label="Measurements"
                  error={
                    formik.touched.measurement &&
                    Boolean(formik.errors.measurement)
                  }
                  helperText={
                    formik.touched.ingredient && formik.errors.ingredient
                  }
                />
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
