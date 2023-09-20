// 그리디~!!!!
// 해당 문제는 탐욕적 선택 속성을 만족시키기 위해, 회의가 끝나는 시간을 기준으로 잡고 정렬해두어야한다. 만약 시작시간이나, 끝나는시간-시작시간 으로 잡게되면, 중복탐색을 해야하는 경우가 생길수도있고 원하는 답에 도달하기 어려울수도있다.
function solution(array) {
  // 회의 시작시간과 끝나는 시간이 같을수있기때문에 끝점으로만 맞추면 안된다.
  array.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  let count = 1;
  let endTime = array[0][1];
  for (let i = 0; i < array.length; i++) {
    if (endTime <= array[i][0]) {
      count++;
      endTime = array[i][1];
    }
  }
  return count;
}
console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
