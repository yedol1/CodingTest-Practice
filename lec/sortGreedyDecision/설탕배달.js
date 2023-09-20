function solution(input) {
  let answer = 0;
  const maxCnt = Math.floor(input / 3);
  if (input % 5 === 0) {
    return console.log((answer = input / 5));
  }
  for (i = 1; i <= maxCnt; i++) {
    if ((input - 3 * i) % 5 === 0) {
      return console.log((answer = i + (input - 3 * i) / 5));
    }
  }
  console.log(-1);
}
console.log(solution(4));
