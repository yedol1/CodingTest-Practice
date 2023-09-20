// function solution(P) {
//   const stack = new Set();

//   for (const [num1, num2] of P) {
//     for (const [num3, num4] of P) {
//       if (num1 === num4 && num2 === num3) {
//         stack.add(`${num1} ${num2}`);
//         break;
//       }
//     }
//   }
//   return stack.size / 2;
// }

function solution(P) {
  const stack = new Map();
  const finalStack = new Set();

  for (const [A, B] of P) {
    if (!stack.has(A)) {
      stack.set(A, new Set());
    }
    stack.get(A).add(B);
  }

  for (const [A, B] of P) {
    if (stack.has(B) && stack.get(B).has(A)) {
      finalStack.add(`${A} ${B}`);
    }
  }

  return finalStack.size / 2;
}

console.log(
  solution([
    [1, 3],
    [3, 1],
    [3, 5],
    [2, 5],
    [5, 3],
  ])
);
