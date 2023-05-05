// 문자열 탐색

function solution(string) {
  let answer = "No";
  let upperString = string.toUpperCase();
  for (let i = 0; i < Math.floor(upperString.length / 2); i++) {
    if (upperString[i] === upperString[upperString.length - i - 1]) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  }
  return answer;
}
// function solution(string) {
//   let answer = "No";
//   let reverseStr = [...string].reverse().join("").toUpperCase();
//   if (string.toUpperCase() === reverseStr) {
//     answer = "YES";
//     return answer;
//   }
//   return answer;
// }
console.log(solution("golnmloG"));
