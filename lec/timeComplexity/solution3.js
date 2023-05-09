// 연속 부분수열 (투포인터)
function solution(number, array) {
  let answer = 0;
  let sum = 0;
  let total = array.length;
  let temp = 0;
  let lp = (rp = 0);
  while (rp <= array.length) {
    if (sum <= number) {
      sum += array[rp++];
    } else {
      sum -= array[lp++];
      answer++;
    }
  }
  return answer;
}
console.log(solution(5, [1, 3, 1, 2, 3]));
