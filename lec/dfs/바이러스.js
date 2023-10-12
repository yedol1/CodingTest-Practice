const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const comCnt = input.shift();
const nodeCnt = input.shift();
const relationArr = input.map((str) => {
  return str.split(" ").map((str) => Number(str));
});

let tree = {};

relationArr.forEach(([a, b]) => {
  if (!tree[a]) {
    tree[a] = [];
  }

  if (!tree[b]) {
    tree[b] = [];
  }

  tree[a].push(b);
  tree[b].push(a);
});
const result = Array.from({ length: comCnt }, () => 0);

let cnt = 0;
function DFS(num) {
  result[num - 1] = 1;
  cnt++;
  tree[num]?.forEach((num) => {
    if (!result[num - 1]) DFS(num);
  });
}
DFS(1);

console.log(cnt - 1);

// 7
// 6
// 1 2
// 2 3
// 1 5
// 5 2
// 5 6
// 4 7
