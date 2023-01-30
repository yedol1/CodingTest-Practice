// 연속한 자연수들로 표현
function solution(num) {
  let answer = 0;

  for (i = 1; i <= num; i++) {
    // 맞는지는 모르겠으나, 약수 중에 홀수인 경우는 전부 연속된 수로 표현가능하다.
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}

console.log(solution(24));
