const { functionExpression } = require("@babel/types");
const { version } = require("yargs");
const functionObj = require("./app.js");
//console.log(functionObj.add(2, 2));
//tobe //for primitive data type
test("2+2=4 should be correct", () => {
  expect(functionObj.add(2, 2)).toBe(4);
});
//not.tobe
test("2+2 not equal to 5", () => {
  expect(functionObj.add(2, 2)).not.toBe(5);
});
//tobenull
test("tobenull is null", () => {
  expect(functionObj.toBeNull()).toBeNull();
});
//tobefalsy
test("checkValue input falsy is falsy", () => {
  expect(functionObj.checkValue(0)).toBeFalsy();
});
//toEqual is for non-primitive data type:arr object
test("addUser should be the passed value object", () => {
  expect(functionObj.createUser("kaiyu", "ma")).toEqual({
    firstName: "kaiyu",
    lastName: "ma",
  });
});
//tobelessthan
test("should under 600", () => {
  expect(functionObj.add(300, 200)).toBeLessThan(600);
});
//to Mach//regex
test("there are no `w` in the team", () => {
  expect("teamiW").not.toMatch(/w/);
});
//toContain//for array
test("username should have admin", () => {
  const username = [1, 2, 4, "admin"];
  expect(username).toContain("admin");
});
//work with async data
// test("user fetched name should be", () => {
//   expect.assertions(1); // the certain number assertion call in the function
//   return functionObj.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });
//async await version
test("user fetched name should be", async () => {
  const data = await functionObj.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
