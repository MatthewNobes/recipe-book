import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";

import { Add, Edit } from "@mui/icons-material";

const click = () => {
  console.log("add new one");
};

export const RecipeSpeedDial = () => {
  const actions = [
    { icon: <Add />, name: "Add", onClickFn: () => click() },
    { icon: <Edit />, name: "Edit", onClickFn: () => click() },
  ];

  return (
    <SpeedDial
      ariaLabel="Recipe Options"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => action.onClickFn()}
        />
      ))}
    </SpeedDial>
  );
};
