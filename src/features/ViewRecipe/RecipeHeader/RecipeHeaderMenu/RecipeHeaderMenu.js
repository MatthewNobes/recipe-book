import { Menu, MenuItem, IconButton, Avatar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setToast } from "../../../../store/slices/toastSlice/toastSlice";
import { deleteRecipe } from "../../../../data";
import { useState } from "react";
import { MoreVert } from "@mui/icons-material";

import PropTypes from "prop-types";

export const RecipeHeaderMenu = ({ id, goBack }) => {
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = useState(null);
	const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
	let menuOptions = [];

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	if (isLoggedIn) {
		menuOptions = [
			{
				label: "Edit recipe",
				onClickFunction: () =>
					dispatch(
						setToast({
							message: "This feature will be added later",
							alertType: "info",
							isOpen: true,
						}),
					),
			},
			{
				label: "Delete recipe",
				onClickFunction: async () => {
					const response = await deleteRecipe(id);
					if (response === "success") {
						dispatch(
							setToast({
								message: "Delete successful",
								alertType: "success",
								isOpen: true,
							}),
						);
						await goBack();
					} else {
						dispatch(
							setToast({
								message: "Unable to delete",
								alertType: "error",
								isOpen: true,
							}),
						);
					}
				},
			},
		];
	}

	if (isLoggedIn) {
		return (
			<>
				<IconButton
					aria-label="more options"
					sx={{ paddingRight: 3 }}
					size="large"
					onClick={handleMenu}
				>
					<Avatar sx={{ opacity: 0.6, backgroundColor: "black" }}>
						<MoreVert htmlColor="#fff" />
					</Avatar>
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					{menuOptions.map((option, index) => {
						return (
							<MenuItem onClick={option.onClickFunction} key={index}>
								{option.label}
							</MenuItem>
						);
					})}
				</Menu>
			</>
		);
	}
};

RecipeHeaderMenu.propTypes = {
	id: PropTypes.number,
	goBack: PropTypes.func,
};
