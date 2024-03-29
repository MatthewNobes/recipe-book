import {
	Typography,
	AppBar,
	Toolbar,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import PropTypes from "prop-types";

export const Header = ({ headerText = "", menuOptions = [] }) => {
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
				<Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
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
							<MoreVertIcon />
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

Header.propTypes = {
	headerText: PropTypes.string,
	menuOptions: PropTypes.array,
};
