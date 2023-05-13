import { Loading, SubPageHeader } from "../../../components";
import { useEffect, useState } from "react";
import { getAllUnits } from "../../../data";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const UnitsList = () => {
	const [units, setUnits] = useState();

	useEffect(() => {
		const populateUnits = async () => {
			const incomingUnits = await getAllUnits();
			const toAddUnits = incomingUnits.map((unit) => {
				return { id: unit.id, label: unit.unit };
			});
			setUnits(toAddUnits);
		};
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
										onClick={() => console.log("edit" + index)}
									>
										<Edit />
									</IconButton>
									<IconButton
										sx={{ mx: 0.5 }}
										edge="end"
										aria-label="delete"
										onClick={() => console.log("delete" + index)}
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
