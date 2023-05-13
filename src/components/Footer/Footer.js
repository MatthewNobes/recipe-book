import { Box, Typography } from "@mui/material";

export const Footer = () => {
	return (
		<Box sx={{ textAlign: "center", marginTop: 2 }}>
			<Typography variant="body2">
				Matt Nobes {new Date().getFullYear()}
			</Typography>
		</Box>
	);
};
