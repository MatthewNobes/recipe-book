import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Page = styled(Box)(({ theme }) => ({
	paddingBottom: "56px",
	backgroundColor: theme.palette.background,
}));
