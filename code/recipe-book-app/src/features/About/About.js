import Header from "../../components/Header";
import {
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	Divider,
	Box,
	Typography,
} from "@mui/material";

export const About = () => {
	// NOTE: Currently needs to slice off api off the end of the API URL, this should be changed
	const linkList = [
		{
			label: "GitHub Page",
			url: "https://github.com/MatthewNobes/recipe-book",
		},
		{
			label: "Outstanding Issues",
			url: "https://github.com/MatthewNobes/recipe-book/issues",
		},
		{
			label: "API Swagger",
			url: process.env.REACT_APP_API_URL.slice(0, -3) + "swagger",
		},
		{
			label: "Project Wiki",
			url: "https://github.com/MatthewNobes/recipe-book/wiki",
		},
	];
	return (
		<Box>
			<Header headerText="About" />
			<Box sx={{ paddingX: 2, paddingY: 2 }}>
				<Typography variant="body1" gutterBottom>
					A long term project to build a recipe book web app that allows users
					to browse recipes. The system relies on a SQL Server database and
					express API backend.
				</Typography>
				<Typography variant="body1" gutterBottom>
					The App is the user interface for the recipe-book system, its the app
					you are currently viewing this on. It has been created with React and
					JavaScript.{" "}
				</Typography>
				<Typography variant="body1" gutterBottom>
					The API provides data from the database for the recipe app. It is
					built using Typescript, Express and Prisma.
				</Typography>
				<Typography variant="body1" gutterBottom>
					For updates on how this system will develop, view the issues on the
					GitHub page.
				</Typography>
			</Box>
			<Divider />
			<List>
				{linkList.map((listItem, index) => {
					return (
						<ListItem key={index}>
							<ListItemButton
								onClick={() => (window.location.href = listItem.url)}
							>
								<ListItemText primary={listItem.label} />
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
			<Divider />
		</Box>
	);
};
