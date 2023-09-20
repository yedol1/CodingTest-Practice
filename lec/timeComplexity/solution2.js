// 투포인터
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  while (p1 < n && p2 < m) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
    }
    if (arr1[p1] > arr2[p2]) {
      p2++;
    } else p1++;
  }
  return answer;
}
console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
