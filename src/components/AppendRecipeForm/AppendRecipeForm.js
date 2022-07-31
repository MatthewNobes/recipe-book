import { Typography, Rating, TextField, Button, Box } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  recipeName: yup
    .string("Enter a recipe name")
    .required("A recipe name is required"),
  recipeDescription: yup
    .string("Enter a recipe description")
    .required("A description is required"),
  difficultyRating: yup
    .string("Difficulty rating is required")
    .required("Difficulty rating is required"),
  servingNumber: yup
    .number()
    .min(1, "Must be at least 1")
    .required("This field is required"),
});

export const AppendRecipeForm = (props) => {
  /** Required form elements
   * recipe name
   * recipe description
   * recipeDifficultyRating
   * recipePrepTime
   * recipeCookTime
   * servingNumber
   * recipeSource
   * recipe ingredients - multiple
   * recipe steps - same style as above
   */

  const formik = useFormik({
    initialValues: {
      recipeName: "",
      recipeDescription: "",
      difficultyRating: NaN,
      servingNumber: 4,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    onReset: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 360,
        bgcolor: "background.paper",
        top: "72px",
        position: "absolute",
        textAlign: "center",
      }}
      className="pageContents"
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="recipeName"
          name="recipeName"
          label="Name"
          value={formik.values.recipeName}
          onChange={formik.handleChange}
          error={formik.touched.recipeName && Boolean(formik.errors.recipeName)}
          helperText={formik.touched.recipeName && formik.errors.recipeName}
          sx={{ marginTop: "15px", width: "95%" }}
        />
        <TextField
          id="recipeDescription"
          name="recipeDescription"
          label="Description"
          multiline
          value={formik.values.recipeDescription}
          onChange={formik.handleChange}
          error={
            formik.touched.recipeDescription &&
            Boolean(formik.errors.recipeDescription)
          }
          helperText={
            formik.touched.recipeDescription && formik.errors.recipeDescription
          }
          sx={{ marginTop: "15px", width: "95%" }}
        />
        <TextField
          id="servingNumber"
          label="Serving Number"
          type="number"
          value={formik.values.servingNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.servingNumber && Boolean(formik.errors.servingNumber)
          }
          helperText={
            formik.touched.servingNumber && formik.errors.servingNumber
          }
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginTop: "15px", width: "95%" }}
        />
        <Box
          sx={{
            display: "flex",
            marginTop: "15px",

            justifyContent: "space-evenly",
          }}
        >
          <Typography component="legend">Difficulty rating</Typography>
          <Rating
            id="difficultyRating"
            name="difficultyRating"
            value={parseInt(formik.values.difficultyRating)}
            onChange={formik.handleChange}
            max={10}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "15px",
            width: "100%",
            justifyContent: "space-evenly",
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
      </form>
    </Box>
  );
};
