// 타겟 넘버
// 문제 설명
// n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다.

function solution(numbers, target) {
  const length = numbers.length;
  let answer = 0;

  function dfs(level, sum) {
    // 레벨을 깊이라고 생각하면 된다. 이때 더이상 들어갈 깊이가 없고, 우리가 도출하고자 하는 조건에 충족한다면 answer의 카운트를 하나 증가시킨다.
    if (level === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }
    // 재귀함수 : 만약 더 파고들 깊이가 있다면, 다음 깊이를 처음 인자에 세팅을 해주고 다음 인자로는 +로 가냐, -로 가냐 로 구분지어서 각각 보내준다.
    dfs(level + 1, sum + numbers[level]);
    dfs(level + 1, sum - numbers[level]);
  }

  dfs(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
