import { Typography, Box, IconButton, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ArrowBack } from "@mui/icons-material";

export const FinishedPage = ({ backFunction, returnAddress, style }) => {
	const navigate = useNavigate();

	return (
		<Box sx={style}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					height: "85vh",
					textAlign: "center",
				}}
			>
				<IconButton onClick={backFunction}>
					<ArrowBack />
				</IconButton>
				<Box>
					<Typography variant="h1">Your all done!</Typography>
					<Button onClick={() => navigate(returnAddress)}>
						Return to recipe
					</Button>
				</Box>
				<IconButton onClick={backFunction} sx={{ visibility: "hidden" }}>
					<ArrowBack />
				</IconButton>
			</Box>
		</Box>
	);
};
FinishedPage.propTypes = {
	returnAddress: PropTypes.string,
	backFunction: PropTypes.func,
	style: PropTypes.object,
};
