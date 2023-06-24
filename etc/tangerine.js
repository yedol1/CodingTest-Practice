function solution(k, tangerine) {
  let tangerineMap = new Map();
  for (let num of tangerine) {
    if (!tangerineMap.has(num)) {
      tangerineMap.set(num, 1);
    } else {
      tangerineMap.set(num, tangerineMap.get(num) + 1);
    }
  }
  let tangerineArr = Array.from(tangerineMap.entries());
  tangerineArr.sort((a, b) => b[1] - a[1]);
  let answer = 0;
  for (let arr of tangerineArr) {
    k -= arr[1];
    answer++;
    if (k <= 0) {
      return answer;
    }
  }
}
