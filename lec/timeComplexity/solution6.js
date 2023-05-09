// 해쉬맵
function solution(string) {
  let candidate = new Map();
  for (let i = 0; i < string.length; i++) {
    if (!candidate.has(string[i])) {
      candidate.set(string[i], 1);
    }
    candidate.set(string[i], candidate.get(string[i]) + 1);
  }
  let answer = [...candidate.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  return answer;
}
console.log(solution("BACBACCACCBDEDE"));
