function solution(arr) {
  let answer = [];
  let newArray = [...arr];
  let temp = Number.MIN_SAFE_INTEGER;
  // 삽입정렬
  for (let i = 1; i < newArray.length; i++) {
    temp = newArray[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (newArray[j] > temp) {
        newArray[j + 1] = newArray[j];
      } else break;
    }
    newArray[j + 1] = temp;
  }

  // 정렬된것과 원래의 배열 비교
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== newArray[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}
console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
// console.log(solution([152, 125, 127, 130, 135, 135, 143, 120, 160]));
