// 연속 부분 수열 합의 개수

function solution(arr) {
  const setObj = new Set();
  for (let i = 1; i < arr.length + 1; i++) {
    const newArr = arr.concat(arr.slice(0, i));
    for (let j = 0; j < arr.length; j++) {
      setObj.add(newArr.slice(j, j + i).reduce((prev, next) => prev + next, 0));
    }
  }
  return setObj.size;
}

console.log(solution([7, 9, 1, 1, 4]));
