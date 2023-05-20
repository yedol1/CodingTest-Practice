function solution(arr) {
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let temp = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && temp < dy[j]) {
        temp = dy[j];
      }
    }
    dy[i] = temp + 1;
  }
  return Math.max(...dy);
}
console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
