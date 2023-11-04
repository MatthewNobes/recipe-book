import isAdminSlice, { initialState, setIsAdmin } from "./isAdminSlice";

describe("isAdminSlice", () => {
	it("should initialise slice with initialValue", () => {
		const sliceInitialValue = isAdminSlice(initialState, {
			type: "unknown",
		});
		expect(sliceInitialValue).toBe(initialState);
	});

	describe("setIsAdmin", () => {
		it("should update the is admin status to true", () => {
			const newStatus = true;

			const updatedIsAdmin = isAdminSlice(initialState, setIsAdmin(newStatus));

			expect(updatedIsAdmin).toEqual({
				isAdmin: newStatus,
			});
		});

		it("should keep the status the same if passed false", () => {
			const newStatus = false;

			const updatedIsAdmin = isAdminSlice(initialState, setIsAdmin(newStatus));

			expect(updatedIsAdmin).toBe(initialState);
		});
	});
});
