// function solution(arr) {
//   const reverseArr = reverse(arr);
//   const firstArr = reverse(reverseArr, (firstIndex = 0), (lastIndex = Math.ceil(reverseArr.length / 2)));
//   const firstArrFirst = reverse(firstArr, (firstIndex = 0), (lastIndex = Math.ceil(firstArr.length / 2)));
//   const firstArrSecond = reverse(firstArr, (firstIndex = Math.ceil(firstArr.length / 2)), (lastIndex = firstArr.length));
//   const secondArr = reverse(reverseArr, (firstIndex = Math.ceil(reverseArr.length / 2)), (lastIndex = reverseArr.length));
//   const secondArrFirst = reverse(secondArr, (firstIndex = 0), (lastIndex = Math.ceil(secondArr.length / 2)));
//   const secondArrSecond = reverse(secondArr, (firstIndex = Math.ceil(secondArr.length / 2)), (lastIndex = secondArr.length));
//   const answer = [...firstArrFirst, ...firstArrSecond, ...secondArrFirst, ...secondArrSecond];
//   return answer;
// }

function solution(arr) {
  const reverseArr = [];
  const test = Math.ceil(arr.length / 2);
  const test2 = Math.floor(test / 2);
  let cnt = 0;
  let cnt2 = test2;
  let cnt3 = 0;
  let cnt4 = test2;
  for (let i = 0; i < test - 1; i++) {
    if (cnt > test2) {
      reverseArr.push(arr[test + test2 + cnt2]);
      cnt2--;
    } else {
      reverseArr.push(arr[test + test2 - cnt]);
      cnt++;
    }
    console.log(reverseArr);
  }
  for (let i = test; i < arr.length; i++) {
    if (cnt3 > test2) {
      reverseArr.push(arr[test2 + cnt4]);
      cnt4--;
    } else {
      reverseArr.push(arr[test2 - cnt3]);
      cnt3++;
    }
  }
  return reverseArr;
}

console.log(solution([0, 1, 2, 3, 4, 5, 6]));
