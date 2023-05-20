function solution(max, arr) {
  let dy = Array.from({ length: max + 1 }, (v) => 0);
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i][0];
    for (j = max; j >= arr[i][1]; j--) {
      if (dy[j] < dy[j - arr[i][1]] + temp) {
        dy[j] = dy[j - arr[i][1]] + temp;
      }
    }
  }
  return Math.max(...dy);
}
console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
