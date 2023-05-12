function solution(n, k) {
  // v(value)는 예의상 놔두는 undefined 이고, 실제 i(index)로 배열을 만든다.
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  let num = 0;
  while (queue.length > 1) {
    for (let i = 0; i < k; i++) {
      if (i === k - 1) {
        queue.shift();
      }
      num = queue.shift();
      queue.push(num);
    }
  }
  return queue[0];
}
console.log(solution(8, 3));
