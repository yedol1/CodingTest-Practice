// 그리디 ( 처음과 끝을 구별하여 별개의 배열로 만들어야한다.)
// 1. 받아온 배열을 열로 구별하여 나눈다. ex) [arr[i][0],start],[arr[i][1],end]
// 2. 나눈 배열을 0번째 인덱스의 크기순으로 나열하고, 크기가 같다면 다음 인덱스인 1번 인덱스를 비교하여, end인 배열을 먼저 설정 한다.
// 3. 정렬된 배열을 탐색하면서 결과값에 도출한다.
function solution(arr) {
  // 1번 과정을 수행하기 위한 코드
  let timeLine = [];
  for (let person of arr) {
    timeLine.push([person[0], "start"]);
    timeLine.push([person[1], "end"]);
  }
  // 2번 과정을 수행하기 위한 코드
  const orderBy = ["end", "start"];
  timeLine.sort((a, b) => {
    if (a[0] === b[0]) {
      return orderBy.indexOf(a[1]) - orderBy.indexOf(b[1]);
    } else {
      return a[0] - b[0];
    }
  });
  //3번 과정을 수행하기 위한 코드
  let answer = 0;
  let count = 0;
  for (let time of timeLine) {
    if (time[1] === orderBy[1]) {
      count++;
    } else {
      if (answer < count) {
        answer = count;
      }
      count = 0;
    }
  }
  return answer;
}
console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
