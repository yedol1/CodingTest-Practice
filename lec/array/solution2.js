function solution(arr) {
  let count = 1;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      count++;
    }
  }
  return count;
}
