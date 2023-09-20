// 연속 부분수열 (투포인터)
function solution(number, array) {
  let answer = 0;
  let sum = 0;
  let lp = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    while (sum > number) {
      console.log(sum, number);
      sum -= array[lp++];
    }
    answer += i - lp + 1;
  }
  return answer;
}
console.log(solution(5, [1, 3, 1, 2, 3]));
