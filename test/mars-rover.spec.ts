import { execute } from "../src/mars-rover";

describe("Mars Rover", () => {
  [
    {commands: "", expectedResult: "0,0,N"},
    {commands: "L", expectedResult: "0,0,W"},
    {commands: "LL", expectedResult: "0,0,S"},
    {commands: "LLL", expectedResult: "0,0,E"},
    {commands: "LLLL", expectedResult: "0,0,N"},
    {commands: "R", expectedResult: "0,0,E"},
    {commands: "RR", expectedResult: "0,0,S"},
    {commands: "RRR", expectedResult: "0,0,W"},
    {commands: "RRRR", expectedResult: "0,0,N"},
    {commands: "M", expectedResult: "0,1,N"},
  ].forEach((value => {
    it(`should execute "${value.commands}" and return "${value.expectedResult}"`, function () {
      const result = execute(value.commands);

      expect(result).toEqual(value.expectedResult);
    });
  }));
});
