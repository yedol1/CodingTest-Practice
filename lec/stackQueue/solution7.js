function solution(compulsory, choice) {
  let queue = Array.from(compulsory);
  let choiceArray = Array.from(choice);
  for (let subject of choiceArray) {
    if (queue[0] === subject) {
      queue.shift();
    }
    if (!queue.length) {
      return "YES";
    }
  }
  return "NO";
}
console.log(solution("CABE", "CBDAGE"));
