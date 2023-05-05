// 팰린드롬 문제 (정규표현식 사용)

function solution(string) {
  let answer = "NO";
  let alphabetStr = string.toLowerCase().replace(/[^a-z]/g, "");
  for (let i = 0; i < Math.floor(alphabetStr.length / 2); i++) {
    if (alphabetStr[i] === alphabetStr[alphabetStr.length - i - 1]) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  }
  return answer;
}
console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
