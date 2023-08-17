import {
	Typography,
	AppBar,
	Toolbar,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";
import { FilterAlt, MoreVert } from "@mui/icons-material";
import { useState } from "react";
import PropTypes from "prop-types";
import FilterPanel from "components/FilterPanel";

export const Header = ({
	headerText = "",
	menuOptions = [],
	enableFilters = false,
}) => {
	const hasMenu = menuOptions.length === 0 ? false : true;
	const [filterPanelVisibility, setFilterPanelVisibility] = useState(false);

	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<AppBar position="sticky">
				<Toolbar>
					<Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
						{headerText}
					</Typography>
					{enableFilters ? (
						<IconButton
							onClick={() => setFilterPanelVisibility(!filterPanelVisibility)}
						>
							<FilterAlt />
						</IconButton>
					) : null}
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
			{enableFilters ? (
				<FilterPanel
					filterPanelVisibility={filterPanelVisibility}
					setPanelVisibility={setFilterPanelVisibility}
				/>
			) : null}
		</>
	);
};

Header.propTypes = {
	headerText: PropTypes.string,
	menuOptions: PropTypes.array,
	enableFilters: PropTypes.bool,
};
