function solution(arr, k, m) {
  let count = 0;
  let temp = Array.from({ length: k }, (v) => 0);
  let answer = [];
  function DFS(level, index, sum) {
    if (level === k) {
      if (sum % m === 0) {
        answer.push([...temp]);
        count++;
      }
    } else {
      for (let i = index; i < arr.length; i++) {
        temp[level] = arr[i];
        DFS(level + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
  // return count;
}
console.log(solution([2, 4, 5, 8, 12], 3, 6));
