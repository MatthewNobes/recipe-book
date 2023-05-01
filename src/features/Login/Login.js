import { Box } from "@mui/material";
import { Header } from "../../components";
import { LoginForm } from "./LoginForm/LoginForm";

export const Login = () => {
	return (
		<Box>
			<Header headerText="Recipe Book" />
			<Box
				sx={{
					backgroundColor: "background.paper",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "80vh",
				}}
			>
				<Box sx={{ mx: 1, boxShadow: 1, maxWidth: "400px", width: "100%" }}>
					<LoginForm />
				</Box>
			</Box>
		</Box>
	);
};
