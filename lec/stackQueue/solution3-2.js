function solution(board, moves) {
  let stack = [];
  let answer = 0;
  for (let s of moves) {
    for (let index = 0; index < board.length; index++) {
      if (board[index][s - 1] !== 0) {
        let tmp = board[index][s - 1];
        board[index][s - 1] = 0;
        if (stack.length && stack[stack.length - 1] === tmp) {
          stack.pop();
          answer += 2;
          break;
        } else {
          stack.push(tmp);
          break;
        }
      }
    }
  }
  return answer;
}
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
