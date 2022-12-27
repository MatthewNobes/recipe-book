import { render, screen } from "@testing-library/react";
import { DifficultyChip } from "./DifficultyChip";

describe("DifficultyChip", () => {
	it("should return a chip containing the passed in difficulty rating", () => {
		const rating = 5;

		render(<DifficultyChip difficultyRating={rating} />);

		const ratingText = screen.getByText("Difficulty: " + rating);

		expect(ratingText).toBeInTheDocument();
	});

	it("should return an empty div if the rating is not passed", () => {
		render(<DifficultyChip />);

		const ratingBlock = screen.getByTestId("empty-rating");
		expect(ratingBlock).toBeInTheDocument();
	});
});
