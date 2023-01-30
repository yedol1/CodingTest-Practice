function solution(s) {
  const arrToNum = s
    .split(" ")
    .map((num) => ~~num)
    .sort((a, b) => a - b);
  const MAX_NUM = arrToNum[arrToNum.length - 1];
  const MIN_NUM = arrToNum[0];
  return console.log(`${MIN_NUM} ${MAX_NUM}`);
}
console.log(solution("-1 -2 -3 -4"));
