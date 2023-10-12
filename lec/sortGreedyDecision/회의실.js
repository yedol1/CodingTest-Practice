const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const roomCnt = input.shift();
const roomTimeArr = input
  .map((str) => {
    return str.split(" ").map((string) => Number(string));
  })
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
let result = 0;
let flag = 0;
roomTimeArr.forEach(([start, end]) => {
  if (start >= flag) {
    result++;
    flag = end;
  }
});

console.log(result);

// example.txt
// 11
// 1 4
// 3 5
// 0 6
// 5 7
// 3 8
// 5 9
// 6 10
// 8 11
// 8 12
// 2 13
// 12 14
