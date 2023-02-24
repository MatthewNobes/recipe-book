import { IconButton, Snackbar, Alert } from "@mui/material";
import { FavoriteOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import { setAsFavorite } from "../../utils";
import { useState } from "react";
import PropTypes from "prop-types";

export const FavoriteButton = ({ isFav, recipeID }) => {
	const [isFavorite, setIsFavorite] = useState(isFav);
	const [open, setOpen] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const onClickFn = () => {
		if (isFavorite) {
			setAlertMessage("Removed from favorites");
			setOpen(true);
		} else {
			setAlertMessage("Added to favorites");
			setOpen(true);
		}
		setIsFavorite(!isFavorite);
		setAsFavorite(recipeID); //id will go here later
	};

	return (
		<>
			<IconButton
				aria-label="favorite"
				aria-describedby="Add or remove from favorites"
				color="primary"
				onClick={() => onClickFn()}
			>
				{isFavorite ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
			</IconButton>
			<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
					{alertMessage}
				</Alert>
			</Snackbar>
		</>
	);
};

FavoriteButton.propTypes = {
	isFav: PropTypes.bool,
	recipeID: PropTypes.number,
};
