import { List, ListItem, Fab, Typography, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ImageModel from "./ImageModel";
import { useState } from "react";
import { Image } from "./Image";
import PropTypes from "prop-types";

export const ImageList = (props) => {
	const imageArray = props.imageArray;
	const [formOperation, setFormOperation] = useState("Add");
	const [modalOpenStatus, setModalOpenStatus] = useState(false);

	const openModal = () => {
		setModalOpenStatus(true);
	};

	const removeImage = (instructionID) => {
		props.removeImage(instructionID);
	};

	return (
		<>
			<ImageModel
				modalOpenStatus={modalOpenStatus}
				setModalOpenStatus={setModalOpenStatus}
				addImage={props.addImage}
				operation={formOperation}
			/>
			<List sx={{ width: "100%", bgcolor: "background.paper" }}>
				{imageArray.length === 0 ? (
					<Typography>No images</Typography>
				) : (
					imageArray.map((image, index) => {
						return (
							<Image
								key={index}
								image={image}
								index={index}
								removeImage={removeImage}
							/>
						);
					})
				)}
				<ListItem>
					<Tooltip title={"Add image"} placement="left">
						<Fab
							color="primary"
							size="small"
							aria-label="add"
							sx={{ marginLeft: "auto" }}
							onClick={() => {
								setFormOperation("Add");
								openModal();
							}}
						>
							<AddIcon />
						</Fab>
					</Tooltip>
				</ListItem>
			</List>
		</>
	);
};

ImageList.propTypes = {
	imageArray: PropTypes.array,
	removeImage: PropTypes.func,
	addImage: PropTypes.func,
};
