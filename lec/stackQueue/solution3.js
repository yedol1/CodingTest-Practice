// function solution(board, moves) {
//   let answer = 0;
//   let stack = [];
//   for (let mIndex of moves) {
//     for (let bIndex = 0; bIndex < board.length; bIndex++) {
//       if (board[bIndex][mIndex - 1] !== 0) {
//         stack.push(board[bIndex][mIndex - 1]);
//         if (stack.length > 0 && mIndex === board[bIndex][mIndex - 1]) {
//           stack.pop();
//           answer += 2;
//         }
//         board[bIndex][mIndex - 1] = 0;
//         break;
//       }
//     }
//   }
//   return answer;
// }
function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (let mIndex of moves) {
    for (let bIndex = 0; bIndex < board.length; bIndex++) {
      if (board[bIndex][mIndex - 1] !== 0) {
        let temp = board[bIndex][mIndex - 1];
        board[bIndex][mIndex - 1] = 0;
        if (stack.length > 0 && stack[stack.length - 1] === temp) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(temp);
        }
        break;
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
