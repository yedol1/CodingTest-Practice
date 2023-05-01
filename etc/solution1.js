function solution(balls, share) {
  let answer = 0;
  answer = factorial(balls) / (factorial(balls - share) * factorial(share));
  // 부동소수점 문제를 해결하기 위해 Math.round(x)
  return Math.round(answer);
}

function factorial(num) {
  if (num > 0) {
    return num * factorial(num - 1);
  } else if (num === 0) {
    return 1;
  }
}
console.log(solution(5, 3));
