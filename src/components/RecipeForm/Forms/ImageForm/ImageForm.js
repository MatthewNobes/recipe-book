import { Box } from "@mui/material";
import { ImageList } from "./ImageList/ImageList";
import { PropTypes } from "prop-types";

export const ImageForm = ({ setImages, imageArray }) => {
	const addImage = (imageToAdd) => {
		setImages([...imageArray, imageToAdd]);
	};

	const removeImage = (idToRemove) => {
		const updatedImageArray = imageArray;
		updatedImageArray.splice(idToRemove, 1);
		setImages([...updatedImageArray]);
	};

	return (
		<Box>
			<ImageList
				imageArray={imageArray}
				addImage={addImage}
				removeImage={removeImage}
			/>
		</Box>
	);
};

ImageForm.propTypes = {
	setImages: PropTypes.func,
	imageArray: PropTypes.array,
};
