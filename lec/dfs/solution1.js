// function solution(num) {
//   let answer = [];
//   function callback(num, i) {
//     if (num > 0) {
//       answer.push(i);
//       callback(num - 1, i + 1);
//     } else {
//       return;
//     }
//   }
//   callback(num, 1);
//   return answer;
// }
// console.log(solution(3));
function solution(n) {
  function DFS(L) {
    if (L == 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}

solution(3);
