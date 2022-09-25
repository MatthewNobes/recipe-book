import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import IngredientsList from "./IngredientsList";
import { MethodList } from "./MethodList/MethodList";
import PropTypes from "prop-types";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const RecipeDetailsTabPanel = (props) => {
  const formik = props.formik;

  const [value, setValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", paddingTop: "10px" }}>
        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label="basic tabs example"
          sx={{ paddingX: "15px" }}
        >
          <Tab label="Ingredients" {...a11yProps(0)} />
          <Tab label="Methodology" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <IngredientsList
          ingredientsArray={formik.values.ingredients}
          addIngredient={(ingredientObject) =>
            formik.setFieldValue("ingredients", [
              ...formik.values.ingredients,
              ingredientObject,
            ])
          }
          removeIngredient={(ingredientID) =>
            formik.setFieldValue(
              "ingredients",
              formik.values.ingredients.filter((ing) => ing.id !== ingredientID)
            )
          }
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MethodList
          instructionArray={formik.values.instructions}
          addInstruction={(instructionObject) =>
            formik.setFieldValue("instructions", [
              ...formik.values.instructions,
              instructionObject,
            ])
          }
          removeInstruction={(instructionsID) =>
            formik.setFieldValue(
              "instructions",
              formik.values.instructions.filter(
                (inst) => inst.id !== instructionsID
              )
            )
          }
          reassignNumbers={() => {
            formik.values.instructions.forEach((instruction, index) => {});
            formik.setFieldValue("instructions", [
              ...formik.values.instructions,
            ]);
          }}
        />
      </TabPanel>
    </>
  );
};
