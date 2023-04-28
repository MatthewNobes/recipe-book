import {
	Typography,
	AppBar,
	Toolbar,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";
import { ArrowBack, MoreVert } from "@mui/icons-material";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const SubPageHeader = ({ headerText = "", menuOptions = [] }) => {
	const navigate = useNavigate();
	const hasMenu = menuOptions.length === 0 ? false : true;

	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="sticky">
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
					onClick={() => navigate(-1)}
				>
					<ArrowBack />
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					{headerText}
				</Typography>
				{hasMenu && (
					<div>
						<IconButton
							size="large"
							aria-label="options menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"
						>
							<MoreVert />
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
					</div>
				)}
			</Toolbar>
		</AppBar>
	);
};

SubPageHeader.propTypes = {
	headerText: PropTypes.string,
	menuOptions: PropTypes.array,
};
