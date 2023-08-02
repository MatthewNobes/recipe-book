import { Loading, SubPageHeader } from "components";
import { useEffect, useState } from "react";
import { getAllUnits, deleteUnit, addUnit } from "data";
import { List, ListItem, ListItemText, IconButton, Fab } from "@mui/material";
import { Delete, Add } from "@mui/icons-material";
import { setToast } from "store/slices/toastSlice/toastSlice";
import { useDispatch } from "react-redux";
import { UpsertUnitModel } from "./UpsertUnitModel/UpsertUnitModel";

const UnitsList = () => {
	const dispatch = useDispatch();
	const [units, setUnits] = useState();
	const [operation, setOperation] = useState("Add");
	const [modelOpenStatus, setModelOpenStatus] = useState(false);

	const populateUnits = async () => {
		const incomingUnits = await getAllUnits();
		const toAddUnits = incomingUnits.map((unit) => {
			return { id: unit.id, label: unit.unit };
		});
		setUnits(toAddUnits);
		setOperation("add");
	};

	useEffect(() => {
		populateUnits();
	}, []);

	if (units) {
		return (
			<>
				<UpsertUnitModel
					operation={operation}
					modelOpenStatus={modelOpenStatus}
					setModelOpenStatus={setModelOpenStatus}
					addUnit={async (unitToAdd) => {
						const result = await addUnit(unitToAdd);
						if (result === undefined) {
							dispatch(
								setToast({
									message: "Failed to add unit",
									alertType: "error",
									isOpen: true,
								}),
							);
						} else {
							dispatch(
								setToast({
									message: "Unit added",
									alertType: "success",
									isOpen: true,
								}),
							);
							populateUnits();
						}
						populateUnits();
					}}
				/>
				<Fab
					color="primary"
					aria-label="add"
					sx={{ position: "absolute", bottom: 72, right: 16 }}
					onClick={() => setModelOpenStatus(true)}
				>
					<Add />
				</Fab>
				<List>
					{units.map((unit, index) => {
						return (
							<ListItem
								key={index}
								secondaryAction={
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
								}
							>
								<ListItemText primary={unit.label}></ListItemText>
							</ListItem>
						);
					})}
				</List>
			</>
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
