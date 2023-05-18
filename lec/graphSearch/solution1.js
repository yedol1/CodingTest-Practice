function solution(n, m, graph) {
  let nodeGraph = Array.from(Array(n + 1), (v) => Array(n + 1).fill(0));
  let visited = Array.from({ length: n + 1 }, (v) => 0);
  let answer = [];
  let temp = [];
  for (let [a, b] of graph) {
    nodeGraph[a][b] = 1;
  }
  function DFS(node) {
    if (node === n) {
      // answer++;
      answer.push([...temp]);
    } else {
      for (let i = 1; i <= n; i++) {
        if (nodeGraph[node][i] === 1 && visited[i] === 0) {
          // 방문했다고 표시
          visited[i] = 1;
          temp.push(i);
          DFS(i);
          // 최대깊이까지 갔다가 다시 돌아올때는 방문표시 체크아웃
          visited[i] = 0;
          temp.pop();
        }
      }
    }
  }
  // 처음 노드 1번 방문 표시
  temp.push(1);
  visited[1] = 1;
  DFS(1);
  console.log(answer);
}
console.log(
  solution(5, 9, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
