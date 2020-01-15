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
    {commands: "MM", expectedResult: "0,2,N"},
    {commands: "RM", expectedResult: "1,0,E"},
    {commands: "MMMMMMMMMM", expectedResult: "0,0,N"},
    {commands: "RMMMMMMMMMM", expectedResult: "0,0,E"},
    {commands: "RMLLM", expectedResult: "0,0,W"},
    {commands: "LM", expectedResult: "9,0,W"},
    {commands: "MLLM", expectedResult: "0,0,S"},
  ].forEach((value => {
    it(`should execute "${value.commands}" and return "${value.expectedResult}"`, function () {
      const result = execute(value.commands);

      expect(result).toEqual(value.expectedResult);
    });
  }));
});
