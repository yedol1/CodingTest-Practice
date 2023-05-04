// indexOf 활용한 중복단어 제거

function solution(array) {
  let answer = array.filter((value, index) => {
    return array.indexOf(value) === index;
  });
  return answer;
}

console.log(solution(["good", "time", "good", "time", "student"]));
