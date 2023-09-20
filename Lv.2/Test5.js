// function solution(arr) {
//   const reverseArr = reverse(arr);
//   const firstArr = reverse(reverseArr, (firstIndex = 0), (lastIndex = Math.ceil(reverseArr.length / 2)));
//   const firstArrFirst = reverse(firstArr, (firstIndex = 0), (lastIndex = Math.ceil(firstArr.length / 2)));
//   const firstArrSecond = firstArr.slice(Math.ceil(firstArr.length / 2));
//   const secondArr = reverse(reverseArr, (firstIndex = Math.ceil(reverseArr.length / 2)), (lastIndex = reverseArr.length));
//   const secondArrFirst = reverse(secondArr, (firstIndex = 0), (lastIndex = Math.ceil(secondArr.length / 2)));
//   const secondArrSecond = secondArr.slice(Math.ceil(secondArr.length / 2));
//   const answer = [...firstArrFirst, ...firstArrSecond, ...secondArrFirst, ...secondArrSecond];
//   console.log(firstArr, "/", secondArr);
//   return answer;
// }

// function reverse(arr, firstIndex = 0, lastIndex = arr.length) {
//   const reverse = [];
//   for (let i = lastIndex - 1; i >= firstIndex; i--) {
//     reverse.push(arr[i]);
//   }
//   return reverse;
// }

function solution(arr) {
  const reverseArr = [...arr].reverse();
  const reverseFirstArr = reverseArr.splice(0, Math.ceil(arr.length / 2)).reverse();
  const firstArrFirst = reverseFirstArr.splice(0, Math.ceil(reverseFirstArr.length / 2)).reverse();
  const secondArrFirst = reverseArr
    .reverse()
    .splice(0, Math.ceil(reverseArr.length / 2))
    .reverse();

  answer = [...firstArrFirst, ...reverseFirstArr, ...secondArrFirst, ...reverseArr];
  return answer;
}

console.log(solution([1, 2]));
