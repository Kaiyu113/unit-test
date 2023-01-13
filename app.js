const axios = require("axios");
const functionObj = {
  add: (num1, num2) => num1 + num2,
  toBeNull: () => null,
  checkValue: (i) => i,
  createUser: (firstName, lastName) => {
    const user = {
      firstName: firstName,
      lastName: lastName,
    };
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error"),
};
module.exports = functionObj;
