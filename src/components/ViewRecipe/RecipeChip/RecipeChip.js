import { Chip, Tooltip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const RecipeChip = ({ value = "", label = "" }) => {
  const valueToDisplay = value === "" ? "0:00" : value;
  return (
    <Tooltip title={label + value}>
      <Chip
        icon={<AccessTimeIcon />}
        label={label + valueToDisplay}
        color="primary"
        variant="outlined"
      />
    </Tooltip>
  );
};
