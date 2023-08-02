import { Button, Typography, Box } from "@mui/material";
import { SubPageHeader } from "components";
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";

export const PageNotFound = () => {
	const navigate = useNavigate();
	return (
		<>
			<SubPageHeader headerText="Go back" />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					textAlign: "center",
					alignItems: "center",
					mt: "30%",
					gap: 5,
				}}
			>
				<Typography variant="h3">
					{"This is not the page you are looking for :("}
				</Typography>
				<Typography variant="body2">
					{"HTTP Error 404 - Page not found"}
				</Typography>
				<Button
					variant="outlined"
					onClick={() => navigate("/")}
					sx={{ width: "250px" }}
					startIcon={<Home />}
				>
					Return Home
				</Button>
			</Box>
		</>
	);
};
