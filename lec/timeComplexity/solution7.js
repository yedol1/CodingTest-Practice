// 아나그램 (해쉬맵)
function solution(arr1, arr2) {
  let arr1Hash = makeMap(arr1);
  for (let value of arr2) {
    if (!arr1Hash.has(value) || arr1Hash.get(value) === 0) {
      return "NO";
    }
    arr1Hash.set(value, arr1Hash.get(value) - 1);
  }
  return "YES";
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
// console.log(makeMap("AbaAeCe"));
console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
