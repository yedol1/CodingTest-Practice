function solution(want, number, discount) {
  let wantMap = new Map();
  let answer = 0;
  let check = Array.from({ length: want.length }, (v) => 0);
  // 원하는 제품 해쉬맵으로 설정
  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], 0);
  }
  //10개까지 값 먼저 설정
  for (let i = 0; i < 10; i++) {
    if (wantMap.has(discount[i])) {
      wantMap.set(discount[i], wantMap.get(discount[i]) + 1);
      if (wantMap.get(discount[i]) >= number[want.indexOf(discount[i])]) {
        check[want.indexOf(discount[i])] = 1;
      }
    }
  }

  if (check.indexOf(0) === -1) {
    answer++;
  }

  // 그다음부터는 슬라이딩윈도우 사용
  let lp = 0;
  // index 10~14
  for (let rp = 10; rp < discount.length; rp++) {
    if (wantMap.has(discount[lp])) {
      wantMap.set(discount[lp], wantMap.get(discount[lp]) - 1);
      if (wantMap.get(discount[lp]) < number[want.indexOf(discount[lp])]) {
        check[want.indexOf(discount[lp])] = 0;
      }
    }
    if (wantMap.has(discount[rp])) {
      wantMap.set(discount[rp], wantMap.get(discount[rp]) + 1);
      if (wantMap.get(discount[rp]) >= number[want.indexOf(discount[rp])]) {
        check[want.indexOf(discount[rp])] = 1;
      }
    }
    if (check.indexOf(0) === -1) {
      answer++;
    }
    lp++;
  }

  return answer;
}

console.log(
  solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"])
);
