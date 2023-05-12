//버블정렬(마지막 인덱스부터 순차적으로 확정해나가면서 정렬)
function solution(arr) {
  let temp = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log(arr);
  }
  return arr;
}
console.log(solution([13, 5, 11, 7, 23, 15]));
