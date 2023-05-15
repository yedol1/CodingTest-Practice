function solution(kind, money) {
  let visited = Array.from({ length: kind.length }, (v) => 0);
  kind.sort((a, b) => b - a);
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(level, totalMoney) {
    if (level === kind.length) {
      if (totalMoney === 0) {
        let sum = 0;
        for (let i = 0; i < visited.length; i++) {
          sum += visited[i];
        }
        if (sum < answer) {
          answer = sum;
        }
      }
    } else {
      let maxCount = Math.floor(totalMoney / kind[level]);
      for (let i = maxCount; i >= 0; i--) {
        visited[level] = i;
        DFS(level + 1, totalMoney - kind[level] * i);
      }
    }
  }
  DFS(0, money);
  return answer;
}
console.log(solution([1, 2, 5], 15));
