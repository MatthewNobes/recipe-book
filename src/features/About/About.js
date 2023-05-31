import { Page, SubPageHeader } from "../../components";
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
			label: "Project Wiki",
			url: "https://github.com/MatthewNobes/recipe-book/wiki",
		},
	];
	return (
		<Box>
			<SubPageHeader headerText="About" />
			<Page>
				<Box sx={{ paddingX: 2, paddingY: 2 }}>
					<Typography variant="body1" gutterBottom>
						A long term project to build a recipe book web app that allows users
						to browse recipes. The app uses supabase to provide its entire
						backend, database, API and authentication.
					</Typography>
					<Typography variant="body1" gutterBottom>
						The App is the user interface for the recipe-book system, its the
						app you are currently viewing this on. It has been created with
						React and JavaScript.
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
			</Page>
		</Box>
	);
};
