const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const testCnt = input.shift();
const Arr = Array.from({ length: testCnt }, () => []);
const memberOfTest = [];
const answer = [];
let cnt = -1;
input.map((str) => {
  if (!isNaN(str)) {
    memberOfTest.push(Number(str));
    cnt++;
  } else {
    Arr[cnt].push(str.split(" ").map((string) => Number(string)));
  }
});
for (let i = 0; i <= cnt; i++) {
  Arr[i].sort((a, b) => a[0] - b[0]);
  let count = 1;
  let minVal = Arr[i].shift()[1];
  Arr[i].map(([a, b]) => {
    if (minVal > b) {
      minVal = b;
      count++;
    }
  });
  console.log(count);
}
// example.txt
// 2
// 5
// 3 2
// 1 4
// 4 1
// 2 3
// 5 5
// 7
// 3 6
// 7 3
// 4 2
// 1 4
// 5 7
// 2 5
// 6 1
