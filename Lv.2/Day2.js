function solution(s) {
  const string = s;
  const answer = jadenCaseFunction(string);
  return answer;
}

const jadenCaseFunction = (str) => {
  let strArr = [...str.toLowerCase()];
  for (i = 0; i < strArr.length; i++) {
    if (i === 0 && strArr[i] !== strArr[i].toUpperCase()) {
      strArr.splice(i, 1, strArr[i].toUpperCase());
    } else if (strArr[i - 1] === " " && strArr[i] !== strArr[i].toUpperCase()) {
      strArr.splice(i, 1, strArr[i].toUpperCase());
    }
  }
  return strArr.join("");
};

console.log(solution("for the last week"));
console.log(solution("3people unFollowed me"));
