// 선택정렬(첫번째 인덱스부터 확정하여 순차적으로 확정)
function solution(arr) {
  let idx = 0;
  let temp = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    idx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[idx] > arr[j]) {
        idx = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[idx];
    arr[idx] = temp;
    console.log(arr);
  }
  return arr;
}
console.log(solution([13, 5, 11, 7, 23, 15, 1]));
