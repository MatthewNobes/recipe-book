import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
	const navigate = useNavigate();

	return <Button onClick={() => navigate("/Login")}>Login</Button>;
};
