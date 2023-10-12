// const fs = require("fs");
// const input = fs.readFileSync("example.txt").toString().trim().split("\n");

// const position = input[1].split(" ").map((str) => Number(str));
// const sortPos = [...position].sort((a, b) => b - a);
// let isFirstContact = false;
// let cnt = 0;
// sortPos.forEach((num) => {
//   let target = num;
//   for (let i = 0; i < position.length; i++) {
//     if (target === 0) break;
//     if (target === position[i]) {
//       position[i] = 0;
//       target = target - 1;
//       isFirstContact = true;
//     }
//   }
//   if (isFirstContact) cnt++;
//   isFirstContact = false;
// });
// console.log(cnt);

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const position = input[1].split(" ").map((str) => Number(str));

// 화살을 저장할 배열을 선언하고, 각 높이에 대해 화살의 개수를 0으로 초기화
let arrows = new Array(1000001).fill(0);
console.log(arrows);
let result = 0; // 필요한 화살의 수

position.forEach((height) => {
  if (arrows[height] > 0) {
    // 해당 높이에 화살이 있는 경우
    arrows[height]--;
    arrows[height - 1]++;
  } else {
    // 해당 높이에 화살이 없는 경우
    arrows[height - 1]++;
    result++; // 새로운 화살을 쏘므로, 화살의 수를 1 증가
  }
});

console.log(result);

// example.txt
// 5
// 2 1 5 4 3
