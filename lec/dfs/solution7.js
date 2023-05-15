function solution(maxT, arr) {
  let answer = 0;
  let curStack = Array.from({ length: arr.length }, (v) => 0);
  function DFS(index) {
    if (index === arr.length) {
      let timeSum = 0;
      let stack = [];
      for (let i = 0; i < curStack.length; i++) {
        if (curStack[i] === 1) {
          timeSum += arr[i][1];
          stack.push(i);
        }
      }
      let scoreSum = 0;
      if (timeSum <= maxT) {
        for (let i = 0; i < stack.length; i++) {
          scoreSum += arr[stack[i]][0];
        }
      }
      if (scoreSum > answer) {
        answer = scoreSum;
      }
      return;
    } else {
      curStack[index] = 1;
      DFS(index + 1);
      curStack[index] = 0;
      DFS(index + 1);
    }
  }
  DFS(0);
  return answer;
}
console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
