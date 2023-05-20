// function solution(n) {
//   let answer = [];
//   let temp = [];
//   function DFS(n) {
//     if (n < 0) {
//       temp = [];
//       return;
//     }
//     if (n === 0) {
//       answer.push([...temp]);
//       temp = [];
//       return;
//     } else {
//       temp.push(1);
//       DFS(n - 1);
//       temp.push(2);
//       DFS(n - 2);
//     }
//   }
//   DFS(n);
//   return answer.length;
// }
// console.log(solution(7));
// DP 로 풀이
function solution(n) {
  let dy = [];
  // 초기 값 세팅
  dy.push(0);
  dy.push(1);
  dy.push(2);
  for (let i = 3; i <= n; i++) {
    dy.push(dy[i - 2] + dy[i - 1]);
  }
  return dy[n];
}
console.log(solution(7));
