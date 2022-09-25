import { Typography, Rating, TextField, Button, Box } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import RecipeDetailsTabPanel from "./RecipeDetailsTabPanel";

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
  recipePrepTime: yup
    .number()
    .min(1, "Must be at least 1")
    .required("This field is required"),
  recipeCookTime: yup
    .number()
    .min(1, "Must be at least 1")
    .required("This field is required"),
  recipeSource: yup.string("Recipe source is optional"),
});

export const AppendRecipeForm = (props) => {
  console.log("re-rendered");
  const addRecipe = () => {
    //should be replaced with a database call to add or append the recipe.
    const recipeName = formik.values.recipeName;
    const recipeDescription = formik.values.recipeDescription;
    const recipeDifficultyRating = formik.values.difficultyRating;
    const recipePrepTime = formik.values.recipePrepTime;
    const recipeCookTime = formik.values.recipeCookTime;
    const servingNumber = formik.values.servingNumber;
    const recipeSource = formik.values.recipeSource;

    fetch(
      process.env.REACT_APP_API_URL +
        "/recipes/add-recipe/" +
        recipeName +
        "-" +
        recipeDescription +
        "-" +
        recipeDifficultyRating +
        "-" +
        recipePrepTime +
        "-" +
        recipeCookTime +
        "-" +
        servingNumber +
        "-" +
        recipeSource
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const formik = useFormik({
    initialValues: {
      recipeName: "",
      recipeDescription: "",
      difficultyRating: 0,
      servingNumber: 4,
      recipePrepTime: 20,
      recipeCookTime: 20,
      recipeSource: "",
      ingredients: [],
      instructions: [
        { id: 0, instructionNumber: 1, instruction: "do this" },
        { id: 1, instructionNumber: 2, instruction: "do that" },
      ],
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      addRecipe();
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
            justifyContent: "space-around",
          }}
        >
          <TextField
            id="recipePrepTime"
            label="Preparation Time (minutes)"
            type="number"
            value={formik.values.recipePrepTime}
            onChange={formik.handleChange}
            error={
              formik.touched.recipePrepTime &&
              Boolean(formik.errors.recipePrepTime)
            }
            helperText={
              formik.touched.recipePrepTime && formik.errors.recipePrepTime
            }
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: "45%" }}
          />
          <TextField
            id="recipeCookTime"
            label="Cooking Time (minutes)"
            type="number"
            value={formik.values.recipeCookTime}
            onChange={formik.handleChange}
            error={
              formik.touched.recipeCookTime &&
              Boolean(formik.errors.recipeCookTime)
            }
            helperText={
              formik.touched.recipeCookTime && formik.errors.recipeCookTime
            }
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: "45%" }}
          />
        </Box>
        <RecipeDetailsTabPanel formik={formik} />
        <TextField
          id="recipeSource"
          name="recipeSource"
          label="Source (URL or Book)"
          multiline
          value={formik.values.recipeSource}
          onChange={formik.handleChange}
          error={
            formik.touched.recipeSource && Boolean(formik.errors.recipeSource)
          }
          helperText={formik.touched.recipeSource && formik.errors.recipeSource}
          sx={{ marginTop: "15px", width: "95%" }}
        />
        <Box
          sx={{
            display: "flex",
            marginTop: "15px",
            width: "95%",
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
            justifyContent: "space-around",
            marginBottom: "100px",
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
