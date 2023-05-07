function solution(n, m, arr) {
  let answer = [];
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        answer.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  answer.sort((a, b) => b - a);
  return answer[m - 1];
}
console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
console.log(solution(4, 3, [1, 2, 3, 4]));
