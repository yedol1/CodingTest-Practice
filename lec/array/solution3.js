function solution(arr) {
  let stack = [];
  let score = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      score = 0;
    }
    if (arr[i] === 1) {
      score++;
      stack.push(score);
    }
  }
  return stack.reduce((cur, prev) => {
    return cur + prev;
  }, 0);
}

console.log(solution([1, 0, 0, 1, 1, 1, 0, 1, 1, 0]));
