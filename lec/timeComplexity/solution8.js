function solution(string, word) {
  let window = "";
  let count = 0;
  let lp = 0;
  let verify = true;
  for (let i = 0; i < word.length; i++) {
    window += string[i];
  }
  let windowHash = makeMap(window);
  for (let rp = word.length; rp <= string.length; rp++, lp++) {
    // 위의 for문은 문자열을 해당 단어 길이만큼 자른 윈도우를 설정하기 위한것
    for (let i = 0; i < word.length; i++) {
      // 윈도우의 아나그램에서 주어진 단어와 중복되는 값을 제거하여 두 아나그램이 같은지 비교
      if (!windowHash.has(word[i])) {
        windowHash.set(word[i], 1);
      }
      windowHash.set(word[i], windowHash.get(word[i]) - 1);
    }
    verify = countZero(windowHash);
    if (verify) {
      count++;
    }
    if (rp === string.length) {
      break;
    }
    window = window.substring(1);
    window += string[rp];
    windowHash = makeMap(window);
  }
  return count;
}
function countZero(map) {
  let count = 0;
  let entries = [...map.entries()];
  for (let value of entries) {
    if (value[1] === 0) count++;
  }
  if (map.size === count) {
    return true;
  } else return false;
}
function makeMap(arr) {
  let arrHash = new Map();
  for (let value of arr) {
    if (!arrHash.has(value)) {
      arrHash.set(value, 1);
    } else {
      arrHash.set(value, arrHash.get(value) + 1);
    }
  }
  return arrHash;
}
console.log(solution("bacaAacba", "abc"));
