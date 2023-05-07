import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	DialogContentText,
	Button,
} from "@mui/material";
import PropTypes from "prop-types";

export const DialogBox = ({
	title,
	message,
	onAccept,
	onDecline,
	isOpen,
	toggleOpen,
}) => {
	return (
		<Dialog
			open={isOpen}
			onClose={toggleOpen}
			aria-labelledby={"alert-dialog-title" + title}
			aria-describedby={"alert-dialog-description-" + message}
		>
			<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{message}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => onDecline()}>No</Button>
				<Button onClick={() => onAccept()} autoFocus>
					Yes
				</Button>
			</DialogActions>
		</Dialog>
	);
};

DialogBox.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	onAccept: PropTypes.func,
	onDecline: PropTypes.func,
	isOpen: PropTypes.bool,
	toggleOpen: PropTypes.func,
};
