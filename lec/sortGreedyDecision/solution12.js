function solution(num, arr) {
  arr.sort((a, b) => a - b);
  let lp = 0;
  let rp = arr[arr.length - 1];
  let answer;
  while (lp <= rp) {
    let mid = Math.floor((lp + rp) / 2);
    let ep = arr[0];
    let dis = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (dis < mid) {
        dis = arr[i] - ep;
      } else {
        count++;
        ep = arr[i];
      }
    }
    if (count < num - 1) {
      rp = mid - 1;
    } else {
      lp = mid + 1;
      answer = mid;
    }
  }
  return answer;
}
console.log(solution(3, [1, 2, 8, 4, 9]));
