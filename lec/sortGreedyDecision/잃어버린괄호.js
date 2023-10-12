function solution(input) {
  let minus = 0;
  let plus = 0;
  let isMinus = false;
  let temp = "";
  let splitArr = [];
  let arr = input.split("");
  arr.map((str, idx) => {
    if (idx === arr.length - 1) {
      temp = temp + str;
      splitArr.push(temp);
    }
    if (str === "+" || str === "-") {
      splitArr.push(temp);
      splitArr.push(str);
      temp = "";
    } else {
      temp = temp + str;
    }
  });
  splitArr.map((str) => {
    // 마이너스 기호가 아니면, plus 숫자에 추가
    if (str === "-") return (isMinus = true);
    if (str !== "+" && str !== "-") {
      if (!isMinus) {
        plus = plus + Number(str);
        console.log(plus);
      } else {
        minus = minus + Number(str);
        console.log(minus);
      }
    }
  });
  return plus - minus;
}
console.log(solution("55-50+40"));
