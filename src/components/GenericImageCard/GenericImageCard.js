import {
	Card,
	CardActionArea,
	CardMedia,
	Typography,
	CardContent,
} from "@mui/material";
import PropTypes from "prop-types";

export const GenericImageCard = ({ id, title, image, onClickFn }) => {
	return (
		<Card
			id={"category-" + id}
			sx={{ maxWidth: "300px", width: "48%", minWidth: "130px" }}
		>
			<CardActionArea
				onClick={() => onClickFn()}
				aria-label={"click to view " + title + " recipes"}
			>
				<CardMedia
					component="img"
					height="140"
					image={`${image}?quality=70&resize=300,140&webp=true`}
					alt={title}
				/>

				<CardContent>
					<Typography variant="h5" component="div">
						{title}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

GenericImageCard.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	image: PropTypes.string,
	onClickFn: PropTypes.func,
};
