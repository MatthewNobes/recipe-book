import { Chip } from "@mui/material";
import { useState } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { minutesToHours } from "../../../utils";

export const TotalTime = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cookTime = 120;
  const prepTime = 20;
  const totalTime = cookTime + prepTime;
  const formattedTime = minutesToHours(totalTime);

  const onClickFn = () => {
    setIsExpanded(!isExpanded);
    console.log("hello");
  };

  const labelText = isExpanded
    ? "Prep: " + prepTime + " Cook: " + cookTime
    : formattedTime;

  return (
    <Chip
      icon={<AccessAlarmIcon />}
      label={labelText}
      variant="outlined"
      onClick={() => onClickFn()}
    />
  );
};
