// 네트워크
// 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.
// 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

function solution(n, computers) {
  let answer = 0;
  const length = n;
  // 방문을 체크할수 있도록 배열 생성
  const visited = new Array(length).fill(false);

  function dfs(index) {
    // 방문했으면 true 로 변경
    visited[index] = true;

    // 모든 컴퓨터 탐색
    for (let i = 0; i < length; i++) {
      // 탐색하는 컴퓨터와 연결되어 있고 && 아직 방문하지 않았다면
      if (computers[index][i] === 1 && visited[i] === false) {
        // 그 연결된 컴퓨터로 재귀함수 돌림
        dfs(i);
      }
    }
  }
  // 완전탐색을 위해 반복문 실행
  for (let i = 0; i < length; i++) {
    // 만약 방문하지 않았다면,
    if (visited[i] === false) {
      // 해당 인덱스로 dfs 돌림, 이때 dfs 함수를 통해 연결된 컴퓨터는 쭉쭉 탐색하여, true 로 계속 visited 배열 변경
      dfs(i);
      // 이 과정이 끝나면 하나의 연결된 뭉탱이 가 걸러지는 것이기 때문에 answer 값을 1 올림.
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
