const graph = {
  0: [1, 2, 4],
  1: [0, 5],
  2: [0, 5],
  3: [4],
  4: [0, 3],
  5: [1, 2],
};
function dfs(graph, start) {
  // 방문했는지 체크
  const visited = Array(6).fill(false);

  // 처음 시작 스택 설정 ( 배열의 인자의 구성은 [탐색노드,부모노드] 로 구성)
  const stack = [[start, -1]];

  // 방문한 노드를 순서에 맞게 정렬
  const result = [];

  // TODO : 스택에 아무 데이터도 없을때까지 탐색하기
  while (stack.length) {
    // currentNoda 와 parentNode 를 스택의 데이터값으로 설정
    let [currentNode, parentNode] = stack.pop();

    // 처음에 이부분을 제외하고 문제를 풀어서 무한루프에 들어갔음,,
    if (visited[currentNode]) {
      continue;
    }

    // 이제 탐색을 했으니, 탐색을 했다고 표시하고 pop을 했던것 원복
    visited[currentNode] = true;
    stack.push([currentNode, parentNode]);

    // 방문한 노드를 탐색순서대로 push
    result.push(currentNode);

    // 선택한 노드의 value 중에 탐색하지 않은 노드들을 전부 스택에 push 한다.
    for (const node of graph[currentNode]) {
      if (!visited[node]) stack.push([node, currentNode]);
    }

    //이제 더이상 탐색할 노드가 없다면 종료.
  }
  return result;
}
console.log(dfs(graph, 0));
