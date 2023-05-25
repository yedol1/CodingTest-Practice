function solution(arr, total) {
  let answer = 0;
  let lp = (rp = 0);
  let sum = 0;
  while (rp < arr.length) {
    if (sum >= total) {
      if (sum === total) {
        answer++;
      }
      sum -= arr[lp++];
    } else {
      sum += arr[rp++];
    }
  }
  return answer;
}
console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
