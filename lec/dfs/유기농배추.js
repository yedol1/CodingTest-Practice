const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const testCase = Number(input.shift());
const coordinate = Array.from({ length: testCase }, () => []);
const testCaseInfo = [];
let cnt = -1;
for (let i = 0; i < input.length; i++) {
  let temp = input[i].split(" ").map((str) => Number(str));
  if (temp.length > 2) {
    cnt++;
    testCaseInfo.push(temp);
  } else {
    coordinate[cnt].push(temp);
  }
}
let graph = [];
testCaseInfo.forEach(([M, N, C]) => {
  let temp = Array.from({ length: N }, () => new Array(M).fill(0));
  graph.push(temp);
});
coordinate.map((Arr, idx) => {
  Arr.map(([m, n]) => {
    graph[idx][n][m] = 1;
  });
});
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let flag = false;
function DFS(caseCnt, x, y) {
  if (x >= testCaseInfo[caseCnt][0] || x < 0 || y >= testCaseInfo[caseCnt][1] || y < 0) {
    return false;
  }
  if (graph[caseCnt][y][x] === 1) {
    graph[caseCnt][y][x] = 0;
    for (let i = 0; i < 4; i++) {
      DFS(caseCnt, x + dx[i], y + dy[i]);
    }
    return true;
  }
  return false;
}
let answerArr = [];

for (let i = 0; i < testCase; i++) {
  let answer = 0;
  for (let j = 0; j < testCaseInfo[i][0]; j++) {
    for (let k = 0; k < testCaseInfo[i][1]; k++) {
      if (DFS(i, j, k)) answer++;
    }
  }
  answerArr.push(answer);
}
answerArr.forEach((num) => console.log(num));
// 2
// 10 8 17
// 0 0
// 1 0
// 1 1
// 4 2
// 4 3
// 4 5
// 2 4
// 3 4
// 7 4
// 8 4
// 9 4
// 7 5
// 8 5
// 9 5
// 7 6
// 8 6
// 9 6
// 10 10 1
// 5 5
