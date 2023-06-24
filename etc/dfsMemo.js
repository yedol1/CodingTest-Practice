function solution(land) {
  let answer = 0;
  let memo = Array.from(Array(land.length), () => Array(4).fill(-1));

  function DFS(level, idx) {
    if (level === land.length) {
      return 0;
    }

    if (memo[level][idx] !== -1) {
      return memo[level][idx];
    }

    for (let i = 0; i < 4; i++) {
      if (i !== idx) {
        memo[level][idx] = Math.max(memo[level][idx], DFS(level + 1, i) + land[level][idx]);
      }
    }

    return memo[level][idx];
  }

  for (let i = 0; i < 4; i++) {
    answer = Math.max(answer, DFS(0, i));
  }

  return answer;
}
