function solution(arr, k, t) {
  const dic = [];
  let cnt = 0;
  for (i = 0; i < arr.length - k; i++) {
    dic[i] = getCombinations(arr, k + i);
  }
  console.log(dic);
  for (i = 0; i < arr.length - k; i++) {
    console.log("check");
    let j = dic[i].length - 1;
    console.log(j);
    while (j >= 0) {
      console.log(
        "결과값:",
        dic[i][j].reduce((a, b) => a + b, 0)
      );
      if (dic[i][j].reduce((a, b) => a + b, 0) <= t) {
        cnt++;
      } else {
        break;
      }
      j--;
      console.log("cnt:", cnt);
    }
  }
  return cnt;
}

const getCombinations = function (arr, k) {
  const results = [];
  if (k === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return
  const array = arr;
  array.sort(function (a, b) {
    return b - a;
  });
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, k - 1);
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]);
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

// console.log(solution([2, 5, 3, 8, 1], 3, 11));
console.log(solution([1, 1, 2, 2], 2, 3));
