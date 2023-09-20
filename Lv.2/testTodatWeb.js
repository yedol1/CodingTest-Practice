// 핀은 최근 새로운 게임에 푹 빠져 있습니다. 핀이 하는 게임을 계속 진행하기 위해서는 모든 퀘스트를 클리어 해야합니다. 게임의 퀘스트는 크게 언제든지 클리어할 수 있는 퀘스트와 특정 퀘스트를 먼저 클리어해야만 진행 할 수 있는 퀘스트로 나뉩니다. 핀은 빠르게 퀘스트를 클리어하기 위해서 다음과 같은 전략을 세웠습니다.

// 1. 현재 진행할 수 있는 퀘스트부터 클리어한다.
// 2. 현재 진행할 수 있는 퀘스트가 여러개라면, 번호가 작은 퀘스트부터 클리어한다.

// 예를 들어서 1번부터 5번까지 5개의 퀘스트가 있고, 3번 퀘스트를 클리어하기 위해서는 1번 퀘스트를 클리어해야 하고, 4번 퀘스트를 클리어하기 위해서는 1번 퀘스트와 5번 퀘스트를 클리어 해야하고, 5번 퀘스트를 클리어하기 위해서 3번 퀘스트를 클리어해야 한다고 가정하겠습니다.

// 그럼 핀이 세운 전략에 따라서 퀘스트를 클리어하면 1,2,3,5,4 순으로 퀘스트를 클리어하면 됩니다.

// 퀘스트의 개수 n 과 퀘스트들의 선행관계 quests가 매개변수로 주어질 때, 핀이 세운 전략에 따라 퀘스트를 클리어할때 순서를 return 하는 함수를 javascript 언어를 활용하여 코드를 만들어주세요.
// 단 퀘스트의 개수 n 은 4 이상 500 이하의 자연수입니다. 또한 quests 배열에는 [a,b]와 같은 형식으로 주어지며, 이는 b 퀘스트를 클리어하기 위해서는 a 퀘스트를 먼저 클리어해야 한다는 것을 의미합니다. 그리고 quests 배열에는 동일한 관계가 중복해서 들어있지 않습니다. 마지막으로 모든 퀘스트를 클리어할 수 없는경우는 주어지지 않습니다.

function solution(n, quests) {
  const adjList = new Map();
  const inDegree = new Array(n + 1).fill(0);
  const order = [];

  for (const [a, b] of quests) {
    if (!adjList.has(a)) adjList.set(a, []);
    adjList.get(a).push(b);
    inDegree[b]++;
  }

  const q = [];
  for (let i = 1; i <= n; i++) {
    if (!inDegree[i]) q.push(i);
  }

  while (q.length) {
    const curr = q.shift();
    order.push(curr);
    if (adjList.has(curr)) {
      for (const neighbor of adjList.get(curr)) {
        inDegree[neighbor]--;
        if (!inDegree[neighbor]) q.push(neighbor);
      }
    }
  }

  if (order.length !== n) return [];
  return order;
}

console.log(
  solution(5, [
    [1, 3],
    [1, 4],
    [3, 5],
    [5, 4],
  ])
);
