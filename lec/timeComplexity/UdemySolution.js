function solution(s) {
  let arrS = s.split(" ");
  let hashMap = new Map();
  let cur;
  let backStack = [];
  let forwardStack = [];

  for (let value of arrS) {
    if (value === "B") {
      if (backStack.length > 0) {
        forwardStack.push(cur);
        cur = backStack.pop();
      } else {
        continue;
      }
    } else if (value === "F") {
      if (forwardStack.length > 0) {
        backStack.push(cur);
        cur = forwardStack.pop();
      } else {
        continue;
      }
    } else {
      if (cur) {
        backStack.push(cur);
      }
      forwardStack = [];
      cur = value;
    }

    if (cur) {
      if (!hashMap.has(cur)) {
        hashMap.set(cur, 1);
      } else {
        hashMap.set(cur, hashMap.get(cur) + 1);
      }
    }
  }

  let answer = 0;
  for (let visitCount of hashMap.values()) {
    answer = Math.max(answer, visitCount);
  }

  console.log(hashMap);
  return answer;
}

// function solution(s) {
//   let visited = {};
//   let backStack = [];
//   let forwardStack = [];

//   let currentPage;
//   let commandArray = s.split(" ");
//   for (let i = 0; i < commandArray.length; i++) {
//     let value = commandArray[i];
//     if (value === "F") {
//       if (forwardStack.length > 0) {
//         backStack.push(currentPage);
//         currentPage = forwardStack.pop();
//       } else {
//         continue;
//       }
//     } else if (value === "B") {
//       if (backStack.length > 0) {
//         forwardStack.push(currentPage);
//         currentPage = backStack.pop();
//       } else {
//         continue;
//       }
//     } else {
//       if (currentPage) {
//         backStack.push(currentPage);
//       }
//       forwardStack = [];
//       currentPage = value;
//     }

//     if (currentPage) {
//       if (!visited[currentPage]) {
//         visited[currentPage] = 1;
//       } else {
//         visited[currentPage] += 1;
//       }
//     }
//   }

//   let maxCount = Object.values(visited).reduce((max, cur) => Math.max(max, cur), 0);

//   return maxCount;
// }
// Testing the solution function
// let s = "1 2 3 4 B B 42 B F F";
// console.log(solution(s)); // Outputs: 3
let s = "1 10 B B 20 1 F B B";
console.log(solution(s)); // Outputs: 4
