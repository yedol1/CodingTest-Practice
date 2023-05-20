function solution(n) {
  let dy = [];
  // 초기 값 세팅
  dy.push(0);
  dy.push(1);
  dy.push(2);
  for (let i = 3; i <= n + 1; i++) {
    dy.push(dy[i - 2] + dy[i - 1]);
  }
  return dy[n + 1];
}
console.log(solution(7));
