function compareMap(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
    // if (!map2.has(key)) return false;
    // if (map2.get(key) !== value) return false;
  }
  return true;
}
function solution(string, word) {
  let count = 0;
  let map1 = new Map();
  let map2 = new Map();
  for (let value of word) {
    if (!map2.has(value)) {
      map2.set(value, 1);
    } else {
      map2.set(value, map2.get(value) + 1);
    }
  }
  for (let i = 0; i < word.length - 1; i++) {
    if (!map1.has(string[i])) {
      map1.set(string[i], 1);
    } else {
      map1.set(string[i], map1.get(string[i]) + 1);
    }
  }
  let lp = 0;
  for (let rp = word.length - 1; rp < string.length; rp++, lp++) {
    if (!map1.has(string[rp])) {
      map1.set(string[rp], 1);
    } else {
      map1.set(string[rp], map1.get(string[rp]) + 1);
    }
    if (compareMap(map1, map2)) count++;
    map1.set(string[lp], map1.get(string[lp]) - 1);
    if (map1.get(string[lp]) === 0) {
      map1.delete(string[lp]);
    }
  }
  return count;
}

console.log(solution("bacaAacba", "abc"));
