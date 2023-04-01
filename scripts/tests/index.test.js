const addition = require("../index");

describe("Calculator", () => {
  describe("Addition Function", () => {
    test("Should return 42 for 20 + 22", () => {
      expect(addition(20, 22)).toBe(42);
    });
  });
});
