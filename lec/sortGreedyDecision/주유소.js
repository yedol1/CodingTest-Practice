const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const length = input[1].split(" ").map((str) => Number(str));
const price = input[2].split(" ").map((str) => Number(str));

let totalPrice = 0;
let flag = 0;

price.map((num, idx) => {
  if (idx === price.length - 1) return;
  if (idx === 0) {
    flag = BigInt(price[0]);
    totalPrice = BigInt(flag) * BigInt(length[0]);
  } else {
    if (num <= flag) {
      flag = num;
      totalPrice = totalPrice + BigInt(flag) * BigInt(length[idx]);
    } else {
      totalPrice = totalPrice + BigInt(flag) * BigInt(length[idx]);
    }
  }
});
console.log(String(totalPrice));

// example.txt
// 4
// 2 3 1
// 5 2 4 1
