function solution(s, e) {
  let answer = 0;
  let visited = Array.from({ length: 10001 }, (v) => 0);
  let distance = Array.from({ length: 10001 }, (v) => 0);
  let queue = [];
  queue.push(s);
  distance[s] = 0;
  visited[s] = 1;
  while (queue.length) {
    let temp = queue.shift();
    for (let nx of [temp + 1, temp + 5, temp - 1]) {
      if (nx === e) return (answer = distance[temp] + 1);
      if (visited[nx] === 0 && nx >= 0 && nx <= 10000) {
        visited[nx] = 1;
        queue.push(nx);
        distance[nx] = distance[temp] + 1;
      }
    }
  }
  return answer;
}
console.log(solution(5, 14));
