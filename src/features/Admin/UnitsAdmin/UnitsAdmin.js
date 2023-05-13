import { Loading, SubPageHeader } from "../../../components";
import { useEffect, useState } from "react";
import { getAllUnits } from "../../../data";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { deleteUnit } from "../../../data";
import { setToast } from "../../../store/slices/toastSlice/toastSlice";
import { useDispatch } from "react-redux";

const UnitsList = () => {
	const dispatch = useDispatch();
	const [units, setUnits] = useState();

	const populateUnits = async () => {
		const incomingUnits = await getAllUnits();
		const toAddUnits = incomingUnits.map((unit) => {
			return { id: unit.id, label: unit.unit };
		});
		setUnits(toAddUnits);
	};

	useEffect(() => {
		populateUnits();
	}, []);

	if (units) {
		return (
			<List>
				{units.map((unit, index) => {
					return (
						<ListItem
							key={index}
							secondaryAction={
								<>
									<IconButton
										sx={{ mx: 0.5 }}
										edge="end"
										aria-label="edit"
										onClick={() => console.log("edit" + unit.id)}
									>
										<Edit />
									</IconButton>
									<IconButton
										sx={{ mx: 0.5 }}
										edge="end"
										aria-label="delete"
										onClick={async () => {
											const result = await deleteUnit(unit.id);
											if (result === "success") {
												dispatch(
													setToast({
														message: "Unit deleted",
														alertType: "success",
														isOpen: true,
													}),
												);
												populateUnits();
											} else {
												dispatch(
													setToast({
														message: "Failed to delete unit",
														alertType: "error",
														isOpen: true,
													}),
												);
											}
										}}
									>
										<Delete />
									</IconButton>
								</>
							}
						>
							<ListItemText primary={unit.label}></ListItemText>
						</ListItem>
					);
				})}
			</List>
		);
	} else {
		<Loading />;
	}
};

export const UnitsAdmin = () => {
	return (
		<>
			<SubPageHeader headerText="Units of measurement" />
			<UnitsList />
		</>
	);
};
