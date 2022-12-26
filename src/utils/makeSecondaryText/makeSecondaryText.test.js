import { makeSecondaryText } from "./makeSecondaryText";

describe("makeSecondaryText", () => {
  it("should return the text cut down to 27 characters with ... on the end", () => {
    const description =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const cutDownDescription = makeSecondaryText(description);
    expect(cutDownDescription.length).toBe(30);
    expect(cutDownDescription).toBe(description.slice(0, 27) + "...");
    expect(
      cutDownDescription.charAt(cutDownDescription.length - 3) +
        cutDownDescription.charAt(cutDownDescription.length - 2) +
        cutDownDescription.charAt(cutDownDescription.length - 1)
    ).toBe("...");
  });

  it("should return the text as it was, without ... on the end", () => {
    const description = "Lorem Ipsum";

    const cutDownDescription = makeSecondaryText(description);
    expect(cutDownDescription).toBe(description);
    expect(
      cutDownDescription.charAt(cutDownDescription.length - 3) +
        cutDownDescription.charAt(cutDownDescription.length - 2) +
        cutDownDescription.charAt(cutDownDescription.length - 1)
    ).not.toBe("...");
  });
});
