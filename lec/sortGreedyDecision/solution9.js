function solution(arr) {
  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else return a[0] - b[0];
  });
  console.log(arr);
  let temp = 0;
  let endTime = arr[0][1];
  let count = 0;
  for (let person of arr) {
    if (endTime > person[0]) {
      console.log(endTime);
      count++;
    } else {
      //  endTime 이 더 작게되면 기준점 교체 및 count 비교
      endTime = person[1];
      if (temp < count) {
        temp = count;
      }
      count = 0;
    }
  }
  return temp;
}
console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
