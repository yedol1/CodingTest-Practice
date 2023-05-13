function solution(num) {
  let answer = "";
  function callback(num) {
    if (num > 0) {
      callback(Math.floor(num / 2));
      if (num % 2 === 0) {
        answer += "0";
      } else {
        answer += "1";
      }
    } else return;
  }
  callback(num);
  return Number(answer);
}
console.log(solution(11));
