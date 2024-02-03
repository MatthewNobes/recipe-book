import { Typography, Box, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export const StepPage = ({
	backFunction,
	nextFunction,
	number,
	step,
	style,
}) => {
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
					<Typography variant="h1">{"Step " + number + ":"}</Typography>
					<Typography variant="h2">{step}</Typography>
				</Box>
				<IconButton onClick={nextFunction}>
					<ArrowForward />
				</IconButton>
			</Box>
		</Box>
	);
};
StepPage.propTypes = {
	number: PropTypes.string,
	step: PropTypes.string,
	backFunction: PropTypes.func,
	nextFunction: PropTypes.func,
	style: PropTypes.object,
};
