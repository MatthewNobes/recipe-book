import { Menu, MenuItem, IconButton, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
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
	const usersRoles = useSelector((state) => state.usersRoles.usersRoles);
	const isLoggedIn = usersRoles !== false ? true : false;
	const isContributor = isLoggedIn ? usersRoles.includes("Contributor") : false;
	const isAdmin = isLoggedIn ? usersRoles.includes("App Admin") : false;

	let menuOptions = [
		{
			label: "Share recipe",
			onClickFunction: async () => {
				await shareRecipe();
			},
		},
	];

	const toggleDeleteDialog = () => {
		setDeleteDialogOpen(!deleteDialogOpen);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const shareRecipe = async () => {
		const shareDetails = {
			url: window.location.href,
			title: name,
			text: `Share ${name} recipe`,
		};

		if (navigator.share) {
			try {
				await navigator.share(shareDetails);
			} catch (error) {
				dispatch(
					setToast({
						message: "Unable to share recipe at this time",
						alertType: "error",
						isOpen: true,
					}),
				);
			}
		} else {
			try {
				await navigator.clipboard.writeText(shareDetails.url);
				dispatch(
					setToast({
						message: "Copied to clipboard",
						alertType: "info",
						isOpen: true,
					}),
				);
			} catch (error) {
				dispatch(
					setToast({
						message: "Unable to share recipe at this time",
						alertType: "error",
						isOpen: true,
					}),
				);
			}
		}
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

	if (isContributor) {
		menuOptions = [
			...menuOptions,
			{
				label: "Edit recipe",
				onClickFunction: () => navigate("/edit/" + id, { replace: false }),
			},
		];
	}

	if (isAdmin) {
		menuOptions = [
			...menuOptions,
			{
				label: "Delete recipe",
				onClickFunction: () => {
					setDeleteDialogOpen(true);
				},
			},
		];
	}

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
			{isAdmin ? (
				<DialogBox
					title={"Delete recipe"}
					message={"Are you sure you want to delete this recipe?"}
					onAccept={onDelete}
					onDecline={toggleDeleteDialog}
					isOpen={deleteDialogOpen}
					toggleOpen={toggleDeleteDialog}
				/>
			) : (
				<></>
			)}
		</>
	);
};

RecipeHeaderMenu.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	goBack: PropTypes.func,
};
