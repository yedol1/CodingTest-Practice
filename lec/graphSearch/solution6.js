//프로그래머스 게임맵 최단거리 bfs
function solution(map) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  // 현재 x,y 값과 level(이동블록)
  const queue = [];
  map[0][0] = 0;
  queue.push([0, 0, 1]);

  while (queue.length) {
    let [curX, curY, level] = queue.shift();
    if (curX === map.length - 1 && curY === map[0].length - 1) return level;
    for (let i = 0; i < dx.length; i++) {
      let nx = curX + dx[i];
      let ny = curY + dy[i];
      if (nx >= 0 && nx < map.length && ny >= 0 && ny < map[0].length && map[nx][ny] === 1) {
        map[nx][ny] = 0;
        queue.push([nx, ny, level + 1]);
      }
    }
  }
  return -1;
}
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
