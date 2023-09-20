function solution(N, relation, dirname) {
  var answer = 0;
  let test = [];
  for (i = 0; i < N + 1; i++) {
    test.push([]);
  }
  for (i = 0; i < relation.length; i++) {
    for (j = i; i < relation.length; j++) {
      if (relation[j][0] === j) {
        test[i].push(relation[j][1]);
      }
    }
  }
  return test;
}
console.log(
  solution(7, [
    [1, 2],
    [2, 5],
    [2, 6],
    [1, 3],
    [1, 4],
    [3, 7],
  ])
);
