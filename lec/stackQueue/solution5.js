// stack
function solution(string) {
  let open = "(";
  let close = ")";
  let openStack = [];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === open) {
      openStack.push(string[i]);
    }
    if (string[i] === close) {
      //레이저
      if (string[i - 1] === open) {
        openStack.pop();
        count += openStack.length;
      } else {
        //하나의 선분 끝
        openStack.pop();
        count += 1;
      }
    }
  }
  return count;
}
console.log(solution("()(((()())(())()))(())"));
