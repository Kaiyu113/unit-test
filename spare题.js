const user = {
  a: ["t", "y", "u", "i"],
  b: ["t", "y", "i"],
  c: ["t", "i"],
  d: ["i"],
};
//useMode使用排名众数
const Mode = () => {
  const obj = {};
  for (const i of Object.keys(user)) {
    for (let j = 0; j < user[i].length; j++) {
      obj[user[i][j]] = obj[user[i][j]]
        ? (obj[user[i][j]] +=
            j / (user[i].length - 1) ? j / (user[i].length - 1) : 0)
        : j / (user[i].length - 1)
        ? j / (user[i].length - 1)
        : 0;
    }
  }
  //出来的数字除以频率然后从小大到大排序，可以的出受欢迎餐厅排名
  console.log(obj);
};
//console.log(Mode());
//通过平均排名
const average = () => {
  const obj = {};
  for (const i of Object.keys(user)) {
    for (let j = 0; j < user[i].length; j++) {
      obj[user[i][j]] = obj[user[i][j]]
        ? [obj[user[i][j]][0] + j + 1, ++obj[user[i][j]][1]]
        : [j + 1, 1];
    }
  }
  for (let key in obj) {
    obj[key] = obj[key][0] / obj[key][1];
  }
  console.log(obj);
  return Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
};
console.log(average());
//相应的餐馆有哪些人投，从大到小展示出来
const getSequence = () => {
  //check
  const obj = {};
  for (const i of Object.keys(user)) {
    user[i].forEach((ele) => {
      obj[ele] = obj[ele] ? (obj[ele] += 1) : (obj[ele] = 1);
    });
  }
  //console.log(obj);
  return Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
};
//餐馆排名
const rating = () => {};
//console.log(getSequence(user));
