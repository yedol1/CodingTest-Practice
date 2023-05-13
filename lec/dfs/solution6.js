function solution(maxW, arr) {
  let answer = 0;
  let curStack = Array.from({ length: arr.length }, (v) => 0);
  function DFS(index) {
    if (index === arr.length) {
      let sum = 0;
      for (let i = 0; i < curStack.length; i++) {
        if (curStack[i] === 1) {
          sum += arr[i];
        }
      }
      if (sum <= maxW) {
        if (answer < sum) {
          answer = sum;
        }
        return answer;
      } else {
        return;
      }
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
console.log(solution(259, [81, 58, 42, 33, 61]));
