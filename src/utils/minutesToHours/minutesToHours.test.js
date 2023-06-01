import { minutesToHours } from "./minutesToHours";

describe("minutesToHours", () => {
	it("should return 2:00 when passed 120 minutes", () => {
		const minutes = 120;

		const hoursFormatted = minutesToHours(minutes);
		expect(hoursFormatted).toBe("2:00");
	});

	it("should return 1:15 when passed 75 minutes", () => {
		const minutes = 75;

		const hoursFormatted = minutesToHours(minutes);
		expect(hoursFormatted).toBe("1:15");
	});

	it("should return 0:35 when passed 35 minutes", () => {
		const minutes = 35;

		const hoursFormatted = minutesToHours(minutes);
		expect(hoursFormatted).toBe("0:35");
	});

	it("should return 10:35 when passed 635 minutes", () => {
		const minutes = 635;

		const hoursFormatted = minutesToHours(minutes);
		expect(hoursFormatted).toBe("10:35");
	});

	it("should return 0:00 when passed 0 minutes", () => {
		const minutes = 0;

		const hoursFormatted = minutesToHours(minutes);
		expect(hoursFormatted).toBe("0:00");
	});
});
