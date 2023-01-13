const reverseString = require("./reverseString.js");
test("is the reverseString function exist", () => {
  expect(reverseString).toBeDefined();
});
test("str will reverse", () => {
  expect(reverseString("hi")).toBe("ih");
});
