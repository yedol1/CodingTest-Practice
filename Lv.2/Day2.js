// JadenCase 문자열 만들기
function solution(s) {
  const string = s;
  const answer = jadenCaseFunction(string);
  return answer;
}

const jadenCaseFunction = (str) => {
  let strArr = [...str];
  let answer = [];
  for (i = 0; i < strArr.length; i++) {
    if (i === 0 || strArr[i - 1] === " ") {
      answer[i] = strArr[i].toUpperCase();
    } else {
      answer[i] = strArr[i].toLowerCase();
    }
  }
  return answer.join("");
};

console.log(solution("for the last week"));
console.log(solution("3people unFollowed me"));
