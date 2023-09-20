// function solution(grade) {
//   const totalStudents = grade.length;
//   const sortedScore = grade.slice().sort((a, b) => b - a);
//   const rank = new Array(totalStudents);

//   for (let i = 0; i < totalStudents; i++) {
//     let rank = sortedScore.indexOf(grade[i]);
//     while (rank < totalStudents - 1 && sortedScore[rank] === sortedScore[rank + 1]) {
//       rank++;
//     }
//     rank[i] = rank + 1;
//   }

//   return rank;
// }

function solution(grade) {
  const sortedScore = grade.slice().sort((a, b) => b - a);
  // 계속 순서가 바뀌는거에는 Map 객체 사용하는것이 좋음
  const rank = [];

  const count = new Map();

  for (let i = 0; i < grade.length; i++) {
    if (!count.has(sortedScore[i])) {
      count.set(sortedScore[i], i);
    }
  }

  for (let i = 0; i < grade.length; i++) {
    let temp = count.get(grade[i]) + 1;
    rank.push(temp);
  }

  return rank;
}
console.log(solution([2, 2, 1]));
console.log(solution([3, 2, 1, 2]));
