// function solution(topping, tasting) {
//   return bfs(topping, tasting, [0, 0, 0]);
// }

// function bfs(topping, tasting, start) {
//   const queue = [start]; // start = (0,0,0) -> (지금 지점, 움직인 거리, 찾아야 하는 토핑 인덱스)
//   const dx = [1, -1];
//   while (queue.length) {
//     const [currentIndex, dist, targetIndex] = queue.shift();
//     let nextTargetIndex = targetIndex;
//     if (topping[currentIndex] === tasting[targetIndex]) {
//       nextTargetIndex += 1;
//       if (nextTargetIndex === tasting.length) {
//         return dist;
//       }
//     }
//     for (let i = 0; i < 2; i++) {
//       let nextIndex = currentIndex + dx[i];
//       if (nextIndex < 0) {
//         nextIndex = topping.length - 1;
//       }
//       nextIndex %= topping.length;
//       queue.push([nextIndex, dist + 1, nextTargetIndex]);
//     }
//   }
// }
// function solution(topping, tasting) {
//   const n = topping.length;
//   const queue = [[1, 0, 0]]; // start at position 1, distance 0, and first topping
//   const dx = [1, -1];
//   while (queue.length) {
//     const [currentPosition, distance, nextToppingIndex] = queue.shift();
//     if (topping[currentPosition - 1] === tasting[nextToppingIndex]) {
//       const nextIndex = nextToppingIndex + 1;
//       if (nextIndex === tasting.length) {
//         return distance;
//       }
//       queue.push([currentPosition, distance, nextIndex]);
//     }
//     for (const d of dx) {
//       let nextPosition = currentPosition + d;
//       if (nextPosition === 0) {
//         nextPosition = n;
//       } else if (nextPosition === n + 1) {
//         nextPosition = 1;
//       }
//       queue.push([nextPosition, distance + 1, nextToppingIndex]);
//     }
//   }
// }

function solution(toppings, tasting) {
  const n = toppings.length;

  // Find positions of each topping on the pizza
  const positions = new Map();
  for (let i = 0; i < n; i++) {
    if (!positions.has(toppings[i])) {
      positions.set(toppings[i], []);
    }
    positions.get(toppings[i]).push(i + 1);
  }

  // Helper function to calculate the minimum distance between two positions considering wrap-around
  function minDistance(a, b, n) {
    return Math.min(Math.abs(a - b), n - Math.abs(a - b));
  }

  function findMinTime(currentPosition, tastingIndex) {
    if (tastingIndex === tasting.length) {
      return 0;
    }

    const topping = tasting[tastingIndex];
    const [pos1, pos2] = positions.get(topping);
    const dist1 = minDistance(currentPosition, pos1, n) + findMinTime(pos1, tastingIndex + 1);
    const dist2 = minDistance(currentPosition, pos2, n) + findMinTime(pos2, tastingIndex + 1);

    return Math.min(dist1, dist2);
  }

  return findMinTime(1, 0);
}
console.log(solution([2, 1, 3, 1, 2, 4, 4, 3], [1, 2, 3, 4])); // output:4
console.log(solution([2, 1, 3, 1, 2, 4, 4, 3], [3, 1, 2, 4])); // output:5
