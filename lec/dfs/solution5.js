function solution(arr) {
  let answer = "NO";
  let temp = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  let curStack = Array.from({ length: arr.length }, (v) => 0);
  let pivot = temp / 2;
  function DFS(index) {
    if (answer === "YES") return;
    if (index === arr.length) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (curStack[i] === 1) {
          sum += arr[i];
        }
      }
      if (sum === pivot) {
        answer = "YES";
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
console.log(solution([1, 3, 5, 6, 7, 10]));
