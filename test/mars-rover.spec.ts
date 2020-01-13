import { execute } from "../src/mars-rover";

describe("Mars Rover", () => {
  it("should start at {0, 0} facing North", () => {
    const expectedResult = "0,0,N";

    const result = execute("");

    expect(result).toEqual(expectedResult);
  });

  it("should rotate left", () => {
    const expectedResult = "0,0,W";

    const result = execute("L");

    expect(result).toEqual(expectedResult);
  })
});
