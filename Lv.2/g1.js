function solution(S, interval) {
  let string = [...S];
  for (i = 0; i < interval.length; i++) {
    let str1 = [];
    let str2 = [];
    let str3 = [];
    str1 = string.slice(0, interval[i][0] - 1);
    str2 = string.slice(interval[i][0] - 1, interval[i][1]).reverse();
    str3 = string.slice(interval[i][1], S.length);
    string = [...str1, ...str2, ...str3];
  }

  return string;
}

console.log(
  solution("abcde", [
    [1, 3],
    [1, 4],
    [4, 5],
  ])
);
