function solution(v) {
  let answer;
  function dfs(v) {
    if (v > 7) {
      // 탈출조건
      return;
    } else {
      console.log(v);
      dfs(v * 2);
      dfs(v * 2 + 1);
    }
  }
  dfs(v);
  return answer;
}
solution(1);
