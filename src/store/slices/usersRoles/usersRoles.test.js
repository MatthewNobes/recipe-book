import usersRolesSlice, { initialState, setUsersRoles } from "./usersRoles";

describe("usersRolesSlice", () => {
	it("should initialise slice with initialValue", () => {
		const sliceInitialValue = usersRolesSlice(initialState, {
			type: "unknown",
		});
		expect(sliceInitialValue).toBe(initialState);
	});

	describe("setUsersRoles", () => {
		it("should update the is admin status to true", () => {
			const newRoles = [
				{ id: 1, role: "App Admin", description: "test description" },
				{ id: 1, role: "App Admin", description: "test description" },
			];

			const updatedUserRoles = usersRolesSlice(
				initialState,
				setUsersRoles(newRoles),
			);

			expect(updatedUserRoles).toEqual({
				userRoles: newRoles,
			});
		});
	});
});
