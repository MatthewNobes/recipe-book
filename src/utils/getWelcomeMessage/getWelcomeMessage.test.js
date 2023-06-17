import { getWelcomeMessage } from "./getWelcomeMessage";

describe("getWelcomeMessage", () => {
	it("should return `Good Morning!` when passed a time before 12:00", () => {
		const welcomeMessage = getWelcomeMessage(11);
		expect(welcomeMessage).toBe("Good Morning!");
	});

	it("should return `Good Afternoon!` when passed a time between 12:00 and 17:00", () => {
		const welcomeMessage = getWelcomeMessage(12);
		expect(welcomeMessage).toBe("Good Afternoon!");
	});

	it("should return `Good Evening!` when passed a time after 17:00", () => {
		const welcomeMessage = getWelcomeMessage(17);
		expect(welcomeMessage).toBe("Good Evening!");
	});
});
