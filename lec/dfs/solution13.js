function solution(n, f) {
  let answer = [];
  let firstArrayFlag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let visited = Array.from({ length: n + 1 }, (v) => 0);
  let numArr = Array.from({ length: n }, (v) => 0);
  let calNumArr = Array.from({ length: n }, (v) => 0);
  function combination(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (r === 0 || n === r) {
      return 1;
    } else {
      return (dy[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
    }
  }
  for (let i = 0; i < n; i++) {
    calNumArr[i] = combination(n - 1, i);
  }
  function DFS(level, sum) {
    if (firstArrayFlag) {
      return;
    }
    if (level === n && sum === f) {
      answer = [...numArr];
      firstArrayFlag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (visited[i] === 0) {
          visited[i] = 1;
          numArr[level] = i;
          DFS(level + 1, sum + calNumArr[level] * numArr[level]);
          visited[i] = 0;
        }
      }
    }
  }
  DFS(0, 0);
  return answer;
}
console.log(solution(4, 16));
