// function solution(total, arr) {
//   let answer = 0;
//   let sum = 0;
//   let lp = 0;
//   for (let rp = 0; rp < arr.length; rp++) {
//     sum += arr[rp];
//     while (sum > total) {
//       sum -= arr[lp++];
//     }
//     answer += rp - lp + 1;
//   }
//   return answer;
// }
// console.log(solution(5, [1, 3, 1, 2, 3]));
function solution(num) {
  let answer = [1];

  for (let i = 1; i <= num; i++) {
    answer[i] = answer[i - 1] * i;
  }

  return answer;
}

console.log(solution(10));
