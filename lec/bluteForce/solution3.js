function solution(n, m, array) {
  // fill 같은 경우는 동일한 주소를 참조하기 때문에, from 을 통하여 빈 배열을 할당한다.

  let impossibleMenteePerMentor = Array.from({ length: n + 1 }, () => []);
  let temp = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        temp = array[i][j];

        if (impossibleMenteePerMentor[temp].indexOf(array[i][k]) === -1) {
          impossibleMenteePerMentor[temp].push(array[i][k]);
        }
      }
    }
  }
  let answer = n * (n - 1);
  for (let i = 1; i < n + 1; i++) {
    answer -= impossibleMenteePerMentor[i].length;
  }
  return answer;
}

console.log(
  solution(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
