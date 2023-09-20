function solution(size, prices) {
  var max = Number.MAX_SAFE_INTEGER;
  var min = 0;
  let answer = [];
  for (var i = 0; i < prices.length - 1; i++) {
    min = Math.min(...prices.slice(i + 1, size));
    max = prices[i];

    // answer.push(max - min);
  }
  return Math.max(...answer);
}
console.log(solution(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(solution(10, [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]));
console.log(solution(6, [4, 1, 7, 6, 5, 2]));
