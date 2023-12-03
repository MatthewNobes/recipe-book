import { Favorite, DeleteForever, ManageAccounts } from "@mui/icons-material";
import { Avatar, Box, Typography, Divider } from "@mui/material";
import { SubPageHeader, IconList, Page } from "components";
import { getUsersFullDetails } from "data";
import { getCurrentUser } from "data/authentication/getCurrentUser/getCurrentUser";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const MyAccount = () => {
	const options = [
		{
			label: "Account details",
			route: "/settings/myAccount/accountDetails",
			icon: <ManageAccounts />,
		},
		{ label: "Manage favorites", route: "/favorites", icon: <Favorite /> },
		{
			label: "Delete or suspend account",
			route: "/settings/about",
			icon: <DeleteForever />,
			colour: "#ff1212",
		},
	];

	const [userDetails, setUserDetails] = useState();

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
			<SubPageHeader headerText="My Account" />
			<Page>
				{userDetails ? <AvatarItem userDetails={userDetails} /> : <></>}
				<IconList options={options} />
				<Divider />
			</Page>
		</>
	);
};

export const AvatarItem = ({ userDetails }) => {
	const profileReferenceName = userDetails.firstName
		? userDetails.lastName
			? userDetails.firstName + " " + userDetails.lastName
			: userDetails.firstName
		: userDetails.email;
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 1,
				mt: 5,
				mb: 2,
			}}
		>
			<Avatar sx={{ width: "30vw", height: "30vw" }}>
				{profileReferenceName.charAt(0).toUpperCase()}
			</Avatar>
			<Typography variant="h4">{profileReferenceName.split("@")[0]}</Typography>
		</Box>
	);
};

AvatarItem.propTypes = {
	userDetails: PropTypes.object,
};
