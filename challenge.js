"use strict";
console.clear();
// ///////////////////////////////////////////////
// const checkDogs = (arr1, arr2) => {
//   let juliasc = arr1.slice(1, -2);
//   let total = [...juliasc, ...arr2];
//   total.forEach((val, i) => {
//     if (val > 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${val} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//     console.log();
//   });
// };
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// checkDogs(dogsJulia, dogsKate);
// let arr1 = [...dogsJulia];
// let arr2 = arr1.map((el) => el + 2);
// console.log(arr2);
const user = "Steven Ray Johson";
const createLoginName = (val = "") => {
  val = val.toLowerCase();
  let arr = val.split(" ");
  let init = arr.map((el) => {
    return el.slice(0, 1);
  });
  return init.join("");
};

console.log(createLoginName(user));
