import IngredientModal from "./IngredientModal";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
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
			<Fab
				color="primary"
				size="small"
				aria-label="add"
				sx={{ marginLeft: "auto" }}
				onClick={() => addIngredient()}
			>
				<AddIcon />
			</Fab>
		</>
	);
};

AddIngredient.propTypes = {
	addIngredient: PropTypes.func,
	units: PropTypes.array,
};
