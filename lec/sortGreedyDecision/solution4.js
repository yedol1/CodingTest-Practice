//삽입정렬
function solution(arr) {
  let temp = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
console.log(solution([11, 7, 5, 6, 10, 9]));
