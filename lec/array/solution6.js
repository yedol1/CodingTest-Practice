// 상하좌우 탐색

function solution(array) {
  let count = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let verify = true;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (nx >= 0 && nx < array.length && ny >= 0 && ny < array.length && array[nx][ny] > array[i][j]) {
          verify = false;
          break;
        }
      }
      if (verify === true) {
        count++;
      }
    }
  }
  return count;
}
console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
