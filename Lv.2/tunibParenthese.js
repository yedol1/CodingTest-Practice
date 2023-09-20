// const solution = (data) => {
//   let arr = data.split("");
//   let compareArr = [];
//   const parenthesesObj = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };
//   const leftParentheses = Object.values(parenthesesObj);
//   for (let i = 0; i < arr.length; i++) {
//     if (leftParentheses.includes(arr[i])) {
//       compareArr.push(arr[i]);
//     } else {
//       if (compareArr.includes(parenthesesObj[arr[i]])) {
//         compareArr.pop(parenthesesObj[arr[i]]);
//       } else return "False";
//     }
//   }
//   if (compareArr.length) {
//     return "False";
//   } else return "True";
// };

// const solution = function (data) {
//   const parentheses = new Map([
//     ["(", ")"],
//     ["{", "}"],
//     ["[", "]"],
//   ]);
//   let stack = [];

//   for (const char of data) {
//     if (parentheses.has(char)) {
//       stack.push(char);
//     } else if (stack.length === 0 || char !== parentheses.get(stack.pop())) {
//       return "False";
//     }
//   }
//   return stack.length === 0 ? "True" : "False";
// };

function solution(string) {
  const parentheses = { "[": 0, "]": 0, "{": 0, "}": 0, "(": 0, ")": 0 };

  for (const key of string) {
    if (parentheses.hasOwnProperty(key)) {
      parentheses[key]++;
    }
  }

  return parentheses["["] === parentheses["]"] && parentheses["{"] === parentheses["}"] && parentheses["("] === parentheses[")"] ? "True" : "False";
}
console.log(solution("((){}))){[]}"));
console.log(solution("([{]})"));
console.log(solution("(){}[]"));
console.log(solution("[({()})}}]"));

// 대괄호 [ ], 중괄호 { }, 소괄호 ( ) 가 짝이 맞게 적절히 배치되어 있는지를 판별하는 프로그램을 작성한다.
//   1) 각 괄호의 우선순위는 상관하지 않는다.
//   예를들어, {[]} 와 같이 중괄호 안에 대괄호가 들어가 있어도 적절히 배치되어 있는 것으로 판별한다.
//   2) 여는 괄호와 닫는 괄호의 순서는 상관하지 않는다.
//   예를들어, 닫는 괄호인 )가 먼저 입력되어도 짝만 맞다면 정상적인 값으로 판별한다.

//   입력
//   길이가 2,000,000 이하인, 임의의 괄호들로 이루어진 문자열 출력
//   짝이 맞는 적절한 배치라면 True 출력, 그렇지 않다면 False 출력
