function solution(number) {
  let answer = 1;
  function DFS(level) {
    if (level === number) {
      return;
    } else {
      answer *= level + 1;
      DFS(level + 1);
    }
  }
  DFS(0);
  return answer;
}
console.log(solution(5));
