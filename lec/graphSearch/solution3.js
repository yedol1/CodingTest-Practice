function solution(arr) {
  let answer = 0;
  //      아래 오른 위 왼
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  function DFS(x, y) {
    if (x === 6 && y === 6) {
      return answer++;
    } else {
      for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (0 <= nx && nx <= 6 && 0 <= ny && ny <= 6 && arr[nx][ny] === 0) {
          arr[nx][ny] = 1;
          DFS(nx, ny);
          arr[nx][ny] = 0;
        }
      }
    }
  }
  arr[0][0] = 1;
  DFS(0, 0);
  arr[0][0] = 0;
  return answer;
}
console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
