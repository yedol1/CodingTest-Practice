function solution(array) {
  let stack = [];
  let number = 0;
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  for (let i = 0; i < array.length; i++) {
    if (array[i] in operators) {
      let b = stack.pop();
      let a = stack.pop();
      number = operators[array[i]](a, b);
      stack.push(number);
    } else {
      stack.push(Number(array[i]));
    }
  }
  return stack[0];
}
console.log(solution("352+*9-"));
