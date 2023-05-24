// 조이스틱
function solution(string) {
  // [[start,end]]
  let LRcount = 0;
  let arrayA = [];
  let Alength = [];
  let lp = (rp = 0);
  //연속된 A 의 시작점 끝점 들 뽑아내기 (투포인터)
  while (rp < string.length + 1) {
    // A를 만나면,
    if (string[rp] === "A") {
      rp++;
    } else {
      if (string[lp] === "A") {
        // [start,end,length]
        arrayA.push([lp, rp - 1]);
        Alength.push(rp - lp);
        lp = rp;
      }
      lp++;
      rp = lp;
    }
  }
  console.log(string.length);
  console.log(Alength);
  console.log(arrayA);
  if (arrayA.length) {
    let index = Alength.indexOf(Math.max(...Alength));
    // if (arrayA[index][0] <= Alength[index]) {
    LRcount = Math.min((arrayA[index][0] - 1) * 2 + string.length - arrayA[index][1] - 1, arrayA[index][0] - 1 + 2 * (string.length - arrayA[index][1] - 1), string.length - 1);
    // }
    // else {
    //   LRcount = string.length - 1;
    // }
  } else {
    LRcount = string.length - 1;
  }
  console.log(LRcount);

  //위 아래
  let UDcount = 0;
  function upDown(temp) {
    if (temp === "A") return 0;
    let unicode = temp.charCodeAt();
    return unicode < 78 ? unicode - 65 : 91 - unicode;
  }
  for (let s of string) {
    UDcount += upDown(s);
  }
  return LRcount + UDcount;
}

console.log(solution("JJAAAAAAAJJJJJJAAAN"));
console.log(solution("JAN"));
console.log(solution("JSSASSSN"));
console.log(solution("JEROEN"));
// console.log(solution("AAAAAAAAAAJJJJAAAA"));
