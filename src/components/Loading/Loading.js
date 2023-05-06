import { Box, CircularProgress } from "@mui/material";

export const Loading = () => {
	return (
		<Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
			<CircularProgress />
		</Box>
	);
};
