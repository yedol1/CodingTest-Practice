// reduce 와 splice

function solution1(array) {
  let totalTall = 0;
  totalTall = array.reduce((cur, prev) => {
    return cur + prev;
  }, 0);
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === totalTall - 100) {
        array.splice(i, 1);
        array.splice(j - 1, 1);
        return array;
      }
    }
  }
}
console.log(solution1([20, 7, 23, 19, 10, 15, 25, 8, 13]));
