function solution(s, t) {
  let lengthStack = [];
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i + j] === t && i + j < s.length) {
        num1 = j;
        break;
      }
      if (s[i - j] === t && i - j > 0) {
        num2 = j;
        break;
      }
    }
    if (num1 > num2) {
      lengthStack.push(num1);
    } else {
      lengthStack.push(num2);
    }
    num1 = num2 = 0;
  }
  return lengthStack;
}
console.log(solution("teachermode", "e"));
