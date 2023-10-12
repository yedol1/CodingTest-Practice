const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const N = Number(input.shift());
const relationArr = [];
const dirname = [];
for (let i = 0; i < input.length; i++) {
  if (i < input.length / 2) {
    dirname.push(input[i]);
  } else {
    relationArr.push(input[i].split(" ").map((str) => Number(str)));
  }
}
// console.log(relationArr, dirname);

const tree = {};
const paths = [];

relationArr.forEach((relation) => {
  const parent = relation[0];
  const child = relation[1];
  if (!tree[parent]) {
    tree[parent] = [];
  }
  tree[parent].push(child);
});

console.log(tree);

function DFS(node, path) {
  const curPath = dirname[node - 1];
  path = path ? `${path}/${curPath}` : curPath;
  if (!tree[node] || tree[node].length === 0) {
    paths.push(path.length);
    return;
  } else {
    tree[node].forEach((childNode) => {
      DFS(childNode, path);
    });
  }
}
DFS(1, "");
console.log(paths);
console.log(Math.max(...paths));
// example.txt
// 7
// root
// abcd
// cs
// hello
// etc
// hello
// solution
// 1 2
// 2 5
// 2 6
// 1 3
// 1 4
// 3 7
