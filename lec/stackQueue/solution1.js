function solution(string) {
  let open = "(";
  let close = ")";
  let openStack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === open) {
      openStack.push(string[i]);
    }
    if (string[i] === close) {
      if (openStack.length > 0) {
        openStack.pop();
      } else return "NO";
    }
  }
  if (openStack.length > 0) return "NO";
  return "YES";
}
console.log(solution("(()(()))(()"));
console.log(solution("(("));
console.log(solution("(())"));
