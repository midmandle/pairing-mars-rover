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
  });

  it("should rotate left twice", () => {
    const expectedResult = "0,0,S";

    const result = execute("LL");

    expect(result).toEqual(expectedResult);
  });

  it("should rotate left three times", () => {
    const expectedResult = "0,0,E";

    const result = execute("LLL");

    expect(result).toEqual(expectedResult);
  });
});
