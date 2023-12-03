import { Loading, Page, SubPageHeader } from "components";
import { useEffect, useState } from "react";
import { getUsersFullDetails } from "data";
import { getCurrentUser } from "data/authentication/getCurrentUser/getCurrentUser";
import { ViewUserDetails } from "./ViewUserDetails";
import { Button } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { EditUserDetails } from "./EditUserDetails/EditUserDetails";

export const AccountDetails = () => {
	const [userDetails, setUserDetails] = useState();
	const [editModeOn, setEditModeOn] = useState(false);

	useEffect(() => {
		const populateUserDetails = async () => {
			const currentUser = await getCurrentUser();
			const usersInfo = await getUsersFullDetails(currentUser.id);
			if (usersInfo.result === "success") {
				setUserDetails(usersInfo.data);
			}
		};
		populateUserDetails();
	}, []);

	return (
		<>
			<SubPageHeader headerText="Account details" />
			<Page>
				{userDetails ? (
					editModeOn ? (
						<EditUserDetails
							userDetails={userDetails}
							setUserDetails={setUserDetails}
							onEditComplete={() => setEditModeOn(false)}
						/>
					) : (
						<>
							<ViewUserDetails userDetails={userDetails} />
							<Button
								sx={{ float: "right" }}
								onClick={() => setEditModeOn(!editModeOn)}
								startIcon={<Edit />}
							>
								Edit details
							</Button>
						</>
					)
				) : (
					<Loading />
				)}
			</Page>
		</>
	);
};
