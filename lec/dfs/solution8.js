function solution(N, M) {
  let visited = Array.from({ length: M }, (v) => 0);

  let answer = [];
  function DFS(level) {
    if (level === M) {
      answer.push([...visited]);
      return;
    } else {
      for (let i = 1; i <= N; i++) {
        visited[level] = i;
        DFS(level + 1);
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution(3, 2));
