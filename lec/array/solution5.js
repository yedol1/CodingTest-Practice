function solution(array) {
  let answer = Number.MIN_SAFE_INTEGER;
  let length = array.length;
  let sumR = 0;
  let sumC = 0;
  for (let i = 0; i < length; i++) {
    sumR = sumC = 0;
    for (let j = 0; j < length; j++) {
      sumR += array[i][j];
      sumC += array[j][i];
    }
    answer = Math.max(answer, sumR, sumC);
  }
  sumR = sumC = 0;
  for (let i = 0; i < length; i++) {
    sumR += array[i][i];
  }
  answer = Math.max(answer, sumR);
  return answer;
}
// function solution(array) {
//   let sumArray = [];
//   let crossSum = [0, 0];
//   for (let i = 0; i < array.length; i++) {
//     // 가로
//     sumArray.push(
//       array[i].reduce((cur, prev) => {
//         return cur + prev;
//       }, 0)
//     );
//     //세로
//     let sum = 0;
//     for (let j = 0; j < array.length; j++) {
//       sum = sum + array[j][i];
//       if (j === array.length - 1) {
//         sumArray.push(sum);
//       }
//       //대각
//       //[0,0],[1,1]....[n,n]
//       if (i === j) {
//         crossSum[0] = crossSum[0] + array[i][j];
//       }
//       //[0,n],[1,n-1]....[n,0]
//       if (i + j === array.length - 1) {
//         crossSum[1] = crossSum[1] + array[i][j];
//       }
//     }
//   }
//   sumArray = [...sumArray, ...crossSum];
//   sumArray.sort((a, b) => b - a);
//   return sumArray[0];
// }

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
