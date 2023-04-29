import toastSlice, { initialState, setToast } from "./toastSlice";

describe("toastSlice", () => {
	it("should initialise slice with initialValue", () => {
		const sliceInitialValue = toastSlice(initialState, {
			type: "unknown",
		});
		expect(sliceInitialValue).toBe(initialState);
	});

	describe("setToast", () => {
		it("should update the message property when passed an string message", () => {
			const newMessage = "Hello world!";

			const updatedToastState = toastSlice(
				initialState,
				setToast({
					message: newMessage,
					alertType: initialState.toast.alertType,
					isOpen: initialState.toast.isOpen,
				}),
			);

			expect(updatedToastState).toEqual({
				toast: {
					message: newMessage,
					alertType: initialState.toast.alertType,
					isOpen: initialState.toast.isOpen,
				},
			});
		});

		it("should update the alertType property when passed an string alertType from the list of valid alert types", () => {
			const newAlertType = "success";

			const updatedToastState = toastSlice(
				initialState,
				setToast({
					message: initialState.toast.message,
					alertType: newAlertType,
					isOpen: initialState.toast.isOpen,
				}),
			);

			expect(updatedToastState).toEqual({
				toast: {
					message: initialState.toast.message,
					alertType: newAlertType,
					isOpen: initialState.toast.isOpen,
				},
			});
		});

		it("should not change the state if the alert type is not from the list of valid alert types", () => {
			const newAlertType = "testing";

			const updatedToastState = toastSlice(
				initialState,
				setToast({
					message: initialState.toast.message,
					alertType: newAlertType,
					isOpen: initialState.toast.isOpen,
				}),
			);

			expect(updatedToastState).toEqual(initialState);
		});

		it("should set isOpen to true", () => {
			const newIsOpen = true;

			const updatedToastState = toastSlice(
				initialState,
				setToast({
					message: initialState.toast.message,
					alertType: initialState.toast.alertType,
					isOpen: newIsOpen,
				}),
			);

			expect(updatedToastState).toEqual({
				toast: {
					message: initialState.toast.message,
					alertType: initialState.toast.alertType,
					isOpen: newIsOpen,
				},
			});
		});
	});
});
