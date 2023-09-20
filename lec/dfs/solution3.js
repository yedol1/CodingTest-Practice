// function callback(number) {
//   if (number === 0) return;
//   else {
//     callback(number - 1);
//     console.log(number);
//   }
// }
// callback(3);
// 함수가실행될때 생기는게 실행컨텍스트 - 매개변수,지역변수,복귀주소
function solution(num) {
  let answer = [];

  function DFS(vertex) {
    if (vertex > 7) {
      return;
    } else {
      // 중위
      answer.push(vertex); // 부모노드
      DFS(vertex * 2); // 좌측에 있는 자식노드
      DFS(vertex * 2 + 1); // 우측에 있는 자식노드
    }
  }
  DFS(1);
  return answer;
}
console.log(solution(7));

function solution(n, m) {
  function DFS() {
    if (종료조건) {
    } else {
      가지치는방법;
      // 부모노드 체크
      // DFS() 좌측
      // DFS() 우측
    }
  }
}

// function solution(v) {
//   let answer = [];
//   function dfs(v) {
//     if (v > 7) {
//       // 탈출조건
//       return;
//     } else {
//       console.log(v);
//       answer.push(v);
//       dfs(v * 2);
//       dfs(v * 2 + 1);
//     }
//   }
//   dfs(v);
//   return answer;
// }
// console.log(solution(1));
