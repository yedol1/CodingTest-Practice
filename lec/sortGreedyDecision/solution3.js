//버블정렬
function solution(arr) {
  let temp = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] >= 0) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      if (arr[j] < 0 && arr[j + 1] < 0) {
        if (arr[j] < arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
}
console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
