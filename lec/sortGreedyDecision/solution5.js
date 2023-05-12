function solution(k, arr) {
  let cache = Array.from({ length: k }, (v) => 0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = cache.length - 1; j > 0; j--) {
      if (cache.indexOf(arr[i]) === -1) {
        cache[j] = cache[j - 1];
      } else {
        j = cache.indexOf(arr[i]);
        cache[j] = cache[j - 1];
      }
      if (j === 1) {
        cache[0] = arr[i];
      }
    }
  }
  return cache;
}
console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
