function solution(num) {
  let answer = [];
  let curStack = Array.from({ length: num + 1 }, (v) => 0);
  function DFS(level) {
    if (level === num + 1) {
      let temp = [];
      for (let i = 1; i < num + 1; i++) {
        if (curStack[i] === 1) {
          temp.push(i);
        }
      }
      if (temp.length > 0) {
        answer.push([...temp]);
      }
    } else {
      curStack[level] = 1;
      DFS(level + 1);
      curStack[level] = 0;
      DFS(level + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
