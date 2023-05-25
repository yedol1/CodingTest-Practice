function solution(string) {
  let hashMap = new Map();
  console.log(string);
  for (let i = 0; i < string.length; i++) {
    if (!hashMap.has(string[i])) {
      hashMap.set(string[i], 1);
    } else {
      hashMap.set(string[i], hashMap.get(string[i]) + 1);
    }
  }
  let answer = [...hashMap.entries()].sort((a, b) => {
    return b[1] - a[1];
  })[0][0];
  return answer;
}
console.log(solution("BACBACCACCBDEDE"));
