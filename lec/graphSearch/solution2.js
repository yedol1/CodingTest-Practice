function solution(n, m, graph) {
  let nodeGraph = Array.from({ length: n + 1 }, (v) => []);

  let visited = Array.from({ length: n + 1 }, (v) => 0);
  let answer = [];
  // let answer = 0;
  for (let [a, b] of graph) {
    nodeGraph[a].push(b);
  }
  console.log(nodeGraph);
  let temp = [];

  function DFS(node) {
    if (node === n) {
      // answer++;
      answer.push([...temp]);
    } else {
      for (let i = 0; i < nodeGraph[node].length; i++) {
        if (visited[nodeGraph[node][i]] === 0) {
          visited[nodeGraph[node][i]] = 1;
          temp.push(nodeGraph[node][i]);
          DFS(nodeGraph[node][i]);
          visited[nodeGraph[node][i]] = 0;
          temp.pop();
        }
      }
    }
  }
  // 처음 노드 1번 방문 표시
  visited[1] = 1;
  temp.push(1);
  DFS(1);
  return answer;
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
