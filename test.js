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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// data end////////////////////////////////////////

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
  // console.log(accountsArr);
};
createLoginName(accounts);
let arr = [1, 4, 7, 3, 6, 3, 9, 4, 9, 3, 5, 3, 5, 8, 9, 4, 5, 67];
let f = movements.filter((el) => {
  return el > 250;
});
// console.log(f)
const withdrawal = movements.filter((el) => {
  return el < 0;
});
// console.log(withdrawal);
const total = arr.reduce((acc, curr) => {
  acc += curr;
  return acc;
});
// console.log(total);
const findMax = arr.reduce((acc, curr) => {
  acc = acc > curr ? acc : curr;
  return curr;
}, arr[0]);
// console.log(findMax);

// -----challenge-2--------------------------------------------------
const calcAverageHumanAge = (arr = []) => {
  let doghumanage = arr.forEach((dog) => {
    // console.log();
  });
  // let doghumanage = arr.map((a) => {
  //   if (a < 2) {
  //     return a * 2;
  //   } else {
  //     return a * 4 + 16;
  //   }
  // });
  // let above18 = doghumanage.filter((el) => {
  //   return el >= 18;
  // });
  // let avg = doghumanage.reduce((a, c) => {
  //   return a + c;
  // });
  // avg = Math.round(avg / arr.length);

  // console.log(avg, doghumanage);
};
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
let ans = movements
  .filter((val) => {
    return val > 0;
  })
  .map((el) => {
    return el * 1.1;
  })
  .reduce((a, c) => {
    return a + c;
  });

console.log(movements.find((val) => val < 0));
