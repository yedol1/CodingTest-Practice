function solution(str) {
  let input = str.trim().split(" ");
  const A = Number(input[0]);
  let B = Number(input[1]);
  let flag = false;
  let answer = 1;
  while (A <= B) {
    if (A === B) {
      flag = true;
      break;
    }
    if (B % 2 === 0) {
      B = B / 2;
    } else if ((B - 1) % 10 === 0) {
      B = (B - 1) / 10;
    } else {
      break;
    }
    answer++;
  }
  if (flag) return answer;
  else return -1;
}

console.log(solution("2 162"));
