// function getFinalString(s) {
//   const stack = [];
//   for (let i = 0; i < s.length; i++) {
//     const char = s.charAt(i);
//     stack.push(char);
//     if (stack.length >= 3 && stack[stack.length - 2] === "W" && stack[stack.length - 3] === "A" && char === "S") {
//       stack.pop();
//       stack.pop();
//       stack.pop();
//     }
//   }
//   return stack.join("") === "" ? -1 : stack.join("");
// }
// console.log(getFinalString("AWAWSSG"));
// console.log(getFinalString("AAWSWS"));
// console.log(getFinalString("ABCDWS"));

// function findRange(num) {
//   let digits = Array.from(String(num), Number);
//   let maxNum = -Infinity;
//   let minNum = Infinity;

//   for (let i = 0; i < digits.length; i++) {
//     for (let j = 0; j <= 9; j++) {
//       if (j === digits[i]) continue;
//       let temp = digits.slice();
//       temp[i] = j;
//       let newNum = parseInt(temp.join(""));
//       if (newNum > maxNum) {
//         maxNum = newNum;
//       }
//       if (newNum < minNum && newNum >= num - digits[i] * Math.pow(10, digits.length - 1 - i)) {
//         minNum = newNum;
//       }
//     }
//   }

//   return maxNum - minNum;
// }
// console.log(findRange(123512));

// function maxLength(a, k) {
//   let maxLength = 0;
//   let sum = 0;
//   let left = 0;
//   for (let right = 0; right < a.length; right++) {
//     sum += a[right];
//     while (sum > k && left <= right) {
//       // left가 right 이하인 경우에만 수행
//       sum -= a[left];
//       left++;
//     }
//     if (sum <= k) {
//       maxLength = Math.max(maxLength, right - left + 1);
//     }
//   }
//   return maxLength;
// }

// // example test case
// console.log(maxLength([3, 1, 2, 1], 4)); // expected output: 2

// function longestChain(words) {
//   // 각 단어의 길이를 저장하는 Map 생성
//   const wordLength = new Map();
//   for (let word of words) {
//     wordLength.set(word, word.length);
//   }

//   // 각 단어를 정렬한 새로운 배열을 생성
//   const sortedWords = words.slice().sort((a, b) => a.length - b.length);

//   // 각 단어에서 한 글자를 제거하여 만들 수 있는 단어의 개수를 저장하는 Map 생성
//   const chainLength = new Map();
//   let longestChain = 1;
//   for (let word of sortedWords) {
//     chainLength.set(word, 1); // 자기 자신은 길이 1
//     for (let i = 0; i < word.length; i++) {
//       const newWord = word.slice(0, i) + word.slice(i + 1);
//       if (wordLength.has(newWord)) {
//         chainLength.set(word, Math.max(chainLength.get(word), chainLength.get(newWord) + 1));
//       }
//     }
//     longestChain = Math.max(longestChain, chainLength.get(word));
//   }
//   return longestChain;
// }
// const words = ["a", "b", "ba", "bca", "bda", "bdca"];
// const result = longestChain(words);
// console.log(result);

// function minimumTreePath(n, edges, visitNodes) {
//   // 그래프 생성
//   const graph = new Map();
//   for (let [u, v] of edges) {
//     if (!graph.has(u)) {
//       graph.set(u, []);
//     }
//     if (!graph.has(v)) {
//       graph.set(v, []);
//     }
//     graph.get(u).push(v);
//     graph.get(v).push(u);
//   }

//   // visitNodes를 포함하는 경로의 길이를 구하기 위해 bfs 수행
//   const queue = [{ node: 1, visited: new Set([1]) }];
//   const target = new Set(visitNodes);
//   let minLength = Infinity;
//   while (queue.length > 0) {
//     const { node, visited } = queue.shift();
//     if (target.size === 0) {
//       minLength = Math.min(minLength, visited.size - 1);
//       continue;
//     }
//     for (let neighbor of graph.get(node)) {
//       if (!visited.has(neighbor)) {
//         const newVisited = new Set(visited);
//         newVisited.add(neighbor);
//         if (target.has(neighbor)) {
//           target.delete(neighbor);
//         }
//         queue.push({ node: neighbor, visited: newVisited });
//       }
//     }
//   }
//   return minLength;
// }

// console.log(minimumTreePath(5, [(1, 2), (2, 3), (2, 4), (1, 5)], [3, 4]));

function findRange(num) {
  let digits = num.toString().split("");
  let minNum = Number.MAX_SAFE_INTEGER;
  let maxNum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < 10; j++) {
      if (j == parseInt(digits[i])) continue;

      let newNum = parseInt(
        digits
          .slice(0, i)
          .concat(j)
          .concat(digits.slice(i + 1))
          .join("")
      );
      if (newNum < minNum) minNum = newNum;
      if (newNum > maxNum) maxNum = newNum;
    }
  }

  return maxNum - minNum;
}
console.log(findRange(123512));
