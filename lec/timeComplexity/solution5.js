function solution(k, array) {
  let answer = 0;
  let sum = 0;
  let lp = 0;
  for (let rp = 0; rp < k; rp++) {
    sum += array[rp];
  }
  answer = sum;
  for (let rp = k; rp < array.length; rp++, lp++) {
    if (answer < sum + array[rp] - array[lp]) {
      answer = sum + array[rp] - array[lp];
    }
    sum += array[rp] - array[lp];
  }
  return answer;
}
console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
