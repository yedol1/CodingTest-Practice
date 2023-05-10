function solution(string) {
  let answer = [];
  for (let value of string) {
    if (value !== ")") {
      answer.push(value);
    } else {
      while (answer.pop() !== "(");
    }
  }
  return answer.join("");
}
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
