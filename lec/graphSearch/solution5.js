function solution(graph) {
  //      아래 오른 위 왼
  let dx = [0, 1, 0, -1, 1, 1, -1, -1];
  let dy = [1, 0, -1, 0, -1, 1, -1, 1];
  let answer = 0;
  function DFS(x, y) {
    graph[x][y] = 0;
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && graph[nx][ny] === 1) {
        graph[nx][ny] === 0;
        DFS(nx, ny);
      }
    }
  }
  let n = graph.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        graph[i][j] = 0;
        answer++;
        DFS(i, j);
      }
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
