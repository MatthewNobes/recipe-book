import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Add, Edit } from "@mui/icons-material";
import { useCallback } from "react";

export const RecipeSpeedDial = () => {
  const click = () => {
    console.log("add new one");
  };

  const navigate = useNavigate();

  const handleAddNewClick = useCallback(
    () => navigate("/AddRecipe", { replace: true }),
    [navigate]
  );
  const actions = [
    { icon: <Add />, name: "Add", onClickFn: () => handleAddNewClick() },
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
