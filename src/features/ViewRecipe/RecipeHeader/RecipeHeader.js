import { Box, IconButton, Avatar, Tooltip } from "@mui/material";
import { ArrowBack, PlayCircle } from "@mui/icons-material";
import { RecipeImage } from "./RecipeImage/RecipeImage";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { RecipeHeaderMenu } from "./RecipeHeaderMenu/RecipeHeaderMenu";

export const RecipeHeader = ({ imageSource, recipeName, id }) => {
	const navigate = useNavigate();

	const goBack = () => {
		if (window.history.length <= 2) {
			navigate("/");
		} else {
			navigate(-1);
		}
	};

	return (
		<Box sx={{ textAlign: "center" }}>
			<Box
				sx={{
					width: "100%",
					height: "50vh",
					position: "absolute",
					display: "flex",
					justifyContent: "space-between",
					paddingTop: 1,
				}}
			>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<IconButton
						aria-label="back"
						sx={{ paddingLeft: 3 }}
						size="large"
						onClick={() => goBack()}
					>
						<Avatar sx={{ opacity: 0.6, backgroundColor: "black" }}>
							<ArrowBack htmlColor="#fff" />
						</Avatar>
					</IconButton>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						height: "100%",
					}}
				>
					<RecipeHeaderMenu id={id} goBack={goBack} name={recipeName} />
					<IconButton onClick={() => navigate(`/play/${id}`)}>
						<Tooltip title="Play recipe" placement="left">
							<Avatar sx={{ backgroundColor: "black" }}>
								<PlayCircle htmlColor="#fff" />
							</Avatar>
						</Tooltip>
					</IconButton>
				</Box>
			</Box>

			<RecipeImage imageSource={imageSource} recipeName={recipeName} />
		</Box>
	);
};

RecipeHeader.propTypes = {
	imageSource: PropTypes.string,
	recipeName: PropTypes.string,
	id: PropTypes.number,
};
