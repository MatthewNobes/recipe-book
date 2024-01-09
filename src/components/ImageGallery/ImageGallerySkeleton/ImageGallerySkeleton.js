import { Skeleton, Box } from "@mui/material";

export const ImageGallerySkeleton = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				marginTop: 1,
				marginBottom: 0,
				paddingX: 1,
			}}
			gap={1}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
				}}
				gap={1}
			>
				<Skeleton variant="rounded" width={"50%"} height={"40vh"} />
				<Skeleton variant="rounded" width={"50%"} height={"40vh"} />
			</Box>
			<Skeleton variant="rounded" width={"100%"} height={"60vh"} />
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
				}}
				gap={1}
			>
				<Skeleton variant="rounded" width={"50%"} height={"40vh"} />
				<Skeleton variant="rounded" width={"50%"} height={"40vh"} />
			</Box>
			<Skeleton variant="rounded" width={"100%"} height={"60vh"} />
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
				}}
				gap={1}
			>
				<Skeleton variant="rounded" width={"50%"} height={"40vh"} />
				<Skeleton variant="rounded" width={"50%"} height={"40vh"} />
			</Box>
			<Skeleton variant="rounded" width={"100%"} height={"60vh"} />
		</Box>
	);
};
