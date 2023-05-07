function solution(array) {
  let answer = Number.MIN_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (value of array) {
    let sum = 0;
    let temp = value;
    while (temp) {
      sum = sum + (temp % 10);
      temp = Math.floor(temp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = value;
    }
    // 같다면 큰수를 출력해야함...
    if (sum === sum) {
      if (value > answer) {
        answer = value;
      }
    }
  }
  return answer;
}
console.log(solution([128, 460, 603, 40, 521, 137, 123]));
