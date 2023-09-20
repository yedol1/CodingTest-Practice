function solution(string) {
  const parentheses = { "[": 0, "]": 0, "{": 0, "}": 0, "(": 0, ")": 0 };

  for (const key of string) {
    if (parentheses.hasOwnProperty(key)) {
      parentheses[key]++;
    }
  }

  return parentheses["["] === parentheses["]"] && parentheses["{"] === parentheses["}"] && parentheses["("] === parentheses[")"] ? "True" : "False";
}
