function solution(n, m, array) {
  let answer = Number.MIN_SAFE_INTEGER;
  let count = 1;
  // 각 index 마다 초기 자본 설정
  let maxMoney = Array.from({ length: n }, () => m);

  // 오름차순으로 정렬
  array.sort((a, b) => {
    a[0] + a[1] - (b[0] + b[1]);
  });
  let sortArray = array.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  // 각 노드별 50% 쿠폰적용했을때 가격 설정
  for (let i = 0; i < n; i++) {
    maxMoney[i] -= sortArray[i][0] / 2 + sortArray[i][1];
  }

  // 문제의 조건을 통하여 정답도출
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j !== i) {
        maxMoney[i] -= sortArray[j][0] + sortArray[j][1];
        if (maxMoney[i] >= 0) {
          count++;
        } else {
          break;
        }
      }
    }
    if (answer < count) {
      answer = count;
    }
    count = 1;
  }
  return answer;
}
console.log(
  solution(5, 28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
