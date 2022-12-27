import { Box, IconButton } from "@mui/material";
import { ArrowBack, MoreVert } from "@mui/icons-material";
import { RecipeImage } from "../RecipeImage/RecipeImage";
import { useNavigate } from "react-router-dom";

export const RecipeHeader = ({ imageSource, recipeName }) => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<Box sx={{ textAlign: "center" }}>
			<Box
				sx={{
					width: "100%",
					position: "absolute",
					display: "flex",
					justifyContent: "space-between",
					paddingTop: 1,
				}}
			>
				<IconButton
					aria-label="back"
					sx={{ paddingLeft: 3 }}
					size="large"
					onClick={() => goBack()}
				>
					<ArrowBack />
				</IconButton>
				<IconButton aria-label="back" sx={{ paddingRight: 3 }} size="large">
					<MoreVert />
				</IconButton>
			</Box>

			<RecipeImage imageSource={imageSource} recipeName={recipeName} />
		</Box>
	);
};
