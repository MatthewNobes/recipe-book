import { Menu, MenuItem, IconButton, Avatar } from "@mui/material";
import supabase from "data/supabase";
import { useDispatch } from "react-redux";
import { setToast } from "store/slices/toastSlice/toastSlice";
import { deleteRecipe } from "data";
import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { DialogBox } from "components";
import PropTypes from "prop-types";

export const RecipeHeaderMenu = ({ id, name, goBack }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const loggedIn = supabase.changedAccessToken ? true : false;

	let menuOptions = [];

	const toggleDeleteDialog = () => {
		setDeleteDialogOpen(!deleteDialogOpen);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onDelete = async () => {
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
	};

	if (loggedIn) {
		menuOptions = [
			{
				label: "Edit recipe",
				onClickFunction: () => navigate("/edit/" + id, { replace: false }),
			},
			{
				label: "Delete recipe",
				onClickFunction: () => {
					setDeleteDialogOpen(true);
				},
			},
			{
				label: "Share recipe",
				onClickFunction: async () => {
					const shareDetails = {
						url: window.location.href,
						title: name,
						text: `Share ${name} recipe`,
					};

					if (navigator.share) {
						try {
							await navigator.share(shareDetails);
						} catch (error) {
							console.log(
								`Oops! I couldn't share to the world because: ${error}`,
							);
						}
					} else {
						// fallback code
						console.log(
							"Web share is currently not supported on this browser. Please provide a callback",
						);
					}
				},
			},
		];
	}

	if (loggedIn) {
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
				<DialogBox
					title={"Delete recipe"}
					message={"Are you sure you want to delete this recipe?"}
					onAccept={onDelete}
					onDecline={toggleDeleteDialog}
					isOpen={deleteDialogOpen}
					toggleOpen={toggleDeleteDialog}
				/>
			</>
		);
	}
};

RecipeHeaderMenu.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	goBack: PropTypes.func,
};
