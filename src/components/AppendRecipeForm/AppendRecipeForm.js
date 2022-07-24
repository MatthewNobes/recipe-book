import { Typography, Rating, TextField, Button, Box } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  recipeName: yup
    .string("Enter a recipe name")
    .required("Recipe name is required"),
  recipeDescription: yup
    .string("Enter a recipe description")
    .required("Password is required"),
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
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
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
          error={formik.touched.recipeName && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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
        <div>
          <Typography component="legend">Difficulty rating</Typography>
          <Rating name="customized-10" max={10} />
        </div>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{ marginTop: "15px", width: "95%" }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};
