// 이분탐색
function solution(arr, target) {
  arr.sort((a, b) => a - b);
  let lp = 0;
  let rp = arr.length - 1;
  let answer = 0;
  while (lp <= rp) {
    let mid = Math.floor((lp + rp) / 2);
    if (target === arr[mid]) {
      return (answer = mid + 1);
    } else if (target > arr[mid]) {
      lp = mid + 1;
    } else {
      rp = mid - 1;
    }
  }
  return answer;
}
console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
