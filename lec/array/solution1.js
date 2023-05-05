function solution(array) {
  let answer = [];
  answer.push(array[0]);
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      answer.push(array[i]);
    }
  }
  return answer;
}
console.log(solution([7, 3, 9, 5, 6, 12]));
