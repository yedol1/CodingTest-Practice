// toUpperCase

function solution(string) {
  let count = 0;
  for (value of string) {
    if (value === value.toUpperCase()) {
      count++;
    }
  }
  return count;
}
let str = "KoreaTimeGood";
console.log(solution(str));
