function solution(n, m) {
  let answer = [];
  let temp = Array.from({ length: m }, (v, i) => [i]);
  console.log(temp);
  function DFS(level, pickNum) {
    if (level === m) {
      answer.push([...temp]);
    } else {
      for (let i = pickNum; i <= n; i++) {
        temp[level] = i;
        DFS(level + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}
console.log(solution(4, 2));
