function solution(arr, dvdCount) {
  let lp = Math.max(...arr);
  let rp = arr.reduce((a, b) => a + b, 0);
  let answer;

  while (lp <= rp) {
    let mid = Math.floor((lp + rp) / 2);
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] > mid || i === 0) {
        count++;
        sum = arr[i];
      } else {
        sum += arr[i];
      }
    }

    if (count <= dvdCount) {
      answer = mid;
      rp = mid - 1;
    } else {
      lp = mid + 1;
    }
  }

  return answer;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
