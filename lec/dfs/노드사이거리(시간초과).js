const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));
console.log(N, M);

let tree = Array.from({ length: N + 1 }, () => [[], []]);
console.log(tree);
for (let i = 0; i < N - 1; i++) {
  const [a, b, length] = input[i].split(" ").map((str) => Number(str));
  tree[a][0].push(b);
  tree[a][1].push(length);
  tree[b][0].push(a);
  tree[b][1].push(length);
}

console.log(tree);
let visited = tree.map((v) => {
  if (v[0].length === 0) {
    return [];
  }
  let arr = [];
  for (i = 0; i < v[0].length; i++) {
    arr.push(false);
  }
  return arr;
});
console.log(visited);
function DFS(start, flag, totalLength, visited) {
  if (start === flag) {
    return totalLength;
  }

  for (let i = 0; i < tree[start][0].length; i++) {
    if (!visited[start][i]) {
      const node = tree[start][0][i];
      const length = totalLength + tree[start][1][i];
      const newVisited = visited.map((arr) => arr.slice());
      newVisited[start][i] = true;

      const result = DFS(node, flag, length, newVisited);
      if (result !== undefined) return result;
    }
  }
}

for (let i = N - 1; i < N - 1 + M; i++) {
  let [start, flag] = input[i].split(" ").map((str) => Number(str));
  let visited = tree.map((v) => {
    if (v[0].length === 0) {
      return [];
    }
    let arr = [];
    for (let j = 0; j < v[0].length; j++) {
      arr.push(false);
    }
    return arr;
  });

  console.log(DFS(start, flag, 0, visited));
}

// 4 2
// 2 1 2
// 4 3 2
// 1 4 3
// 1 2
// 3 2
