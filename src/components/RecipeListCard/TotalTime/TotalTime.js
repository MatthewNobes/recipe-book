import { Chip } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export const TotalTime = (props) => (
  <Chip icon={<AccessAlarmIcon />} label={props.totalTime} variant="outlined" />
);
