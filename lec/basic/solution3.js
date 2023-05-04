// toLowerCase
function solution(string) {
  let newArray = [];
  for (value of string) {
    if (value === value.toUpperCase()) {
      newArray.push(value.toLowerCase());
    } else newArray.push(value.toUpperCase());
  }
  return newArray.join("");
}
let str = "KoreaTimeGood";
console.log(solution(str));
