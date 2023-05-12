function solution(array) {
  // array.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  array.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  let count = 0;
  let final = 0;
  for (let i = 0; i < array.length; i++) {
    final = array[i][1];
    let temp = 1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j][0] >= final) {
        final = array[j][1];
        temp++;
      }
    }
    if (count < temp) {
      count = temp;
    }
  }
  return count;
}
console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
