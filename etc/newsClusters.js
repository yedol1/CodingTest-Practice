function solution(str1, str2) {
  // 각 문자열 두문자씩 끊어서 다른 배열에 할당
  let arrStr1 = [];
  let arrStr2 = [];
  const reg = /[a-zA-Z]/;
  for (let i = 0; i < str1.length - 1; i++) {
    if (reg.test(str1[i]) && reg.test(str1[i + 1])) {
      arrStr1.push(str1[i].toUpperCase() + str1[i + 1].toUpperCase());
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (reg.test(str2[i]) && reg.test(str2[i + 1])) {
      arrStr2.push(str2[i].toUpperCase() + str2[i + 1].toUpperCase());
    }
  }
  if (!arrStr1.length && !arrStr2.length) {
    return 65536;
  }
  const allLen = arrStr1.length + arrStr2.length;
  let str1Nstr2 = [];
  if (arrStr1.length > arrStr2.length) {
    for (let i = 0; i < arrStr2.length; i++) {
      if (arrStr1.indexOf(arrStr2[i]) !== -1) {
        str1Nstr2.push(arrStr2[i]);
        arrStr1.splice(arrStr1.indexOf(arrStr2[i]), 1);
      }
    }
  } else {
    for (let i = 0; i < arrStr1.length; i++) {
      if (arrStr2.indexOf(arrStr1[i]) !== -1) {
        str1Nstr2.push(arrStr1[i]);
        arrStr2.splice(arrStr2.indexOf(arrStr1[i]), 1);
      }
    }
  }
  let str1Ustr2Len = allLen - str1Nstr2.length;
  const answer = Math.floor((str1Nstr2.length / str1Ustr2Len) * 65536);
  return answer;
}
