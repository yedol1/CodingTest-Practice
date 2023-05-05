// 문자열 순회 (isNaN 함수 사용)

function solution1(string) {
  let answer = 0;
  for (value of string) {
    if (!isNaN(value)) {
      answer = 10 * answer + parseInt(value, 10);
      // answer = 10 * answer + Number(value);
    }
  }
  return answer;
}

// 정규표현식으로 풀이

function solution2(string) {
  let num = parseInt(string.replace(/[^0-9]/g, ""));
  return num;
}

console.log(solution1("g0en2T0s8eSoft"));
console.log(solution2("g0en2T0s8eSoft"));
