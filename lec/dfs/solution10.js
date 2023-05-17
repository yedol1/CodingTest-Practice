function solution(arr, M) {
  let visited = Array.from({ length: M }, (v) => 0);
  let answer = [];
  function DFS(level) {
    if (level === M) {
      let temp = [...visited].shift();
      visited.shift();
      if (visited.indexOf(temp) === -1) {
        visited.unshift(temp);
        answer.push([...visited]);
      }
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        visited[level] = arr[i];
        DFS(level + 1);
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution([3, 6, 9], 2));
