function solution(arr) {
  let answer = [];
  let verify = false;
  for (value of arr) {
    let reverse = Number(String(value).split("").reverse().join(""));
    for (let i = 2; i < Math.ceil(Math.sqrt(reverse)); i++) {
      if (reverse % i === 0) {
        verify = true;
        break;
      }
    }
    if (!verify && reverse !== 1) {
      answer.push(reverse);
    }
    verify = false;
  }
  return answer;
}
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
