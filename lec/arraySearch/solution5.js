function solution(string) {
  let answer = "";
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      if (count === 1) {
        answer += string[i];
      } else {
        answer += string[i] + count;
        count = 1;
      }
    }
  }
  return answer;
}

console.log(solution("KKHSSSSSSSE"));
