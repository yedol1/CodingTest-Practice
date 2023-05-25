function solution(length, pick) {
  let queue = Array.from({ length: length }, (v, i) => i + 1);
  while (queue.length > 1) {
    for (let i = 0; i < pick; i++) {
      if (i === pick - 1) {
        queue.shift();
      } else {
        let temp = queue.shift();
        queue.push(temp);
      }
    }
  }
  return queue.pop();
}
console.log(solution(8, 3));
