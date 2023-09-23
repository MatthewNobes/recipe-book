import IngredientModal from "./IngredientModal";
import { Fab, Tooltip } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import PropTypes from "prop-types";

export const AddIngredient = (props) => {
	const [modalOpenStatus, setModalOpenStatus] = useState(false);

	const addIngredient = () => {
		setModalOpenStatus(true);
	};

	return (
		<>
			<IngredientModal
				modalOpenStatus={modalOpenStatus}
				setModalOpenStatus={setModalOpenStatus}
				addIngredient={props.addIngredient}
				operation={"Add"}
			/>
			<Tooltip title={"Add ingredient"} placement={"left"}>
				<Fab
					color="primary"
					size="small"
					aria-label="add"
					sx={{ marginLeft: "auto" }}
					onClick={() => addIngredient()}
				>
					<Add />
				</Fab>
			</Tooltip>
		</>
	);
};

AddIngredient.propTypes = {
	addIngredient: PropTypes.func,
	units: PropTypes.array,
};
