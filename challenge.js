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
// const user = "Steven Ray Johson";
//
//
// console.log(createLoginName(user));
// data===========================================
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const createLoginName = (accountsArr = []) => {
  accountsArr.forEach((acc) => {
    let val = acc.owner;
    val = val.toLowerCase();
    let arr = val.split(" ");
    let init = arr.map((el) => {
      return el.slice(0, 1);
    });
    acc.username = init.join("");
  });
  console.log(accountsArr);
};
createLoginName(accounts);
