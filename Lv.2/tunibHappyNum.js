const isHappy = (number) => {
  let seen = new Set();
  while (number !== 1) {
    if (seen.has(number)) return false;
    seen.add(number);
    let newNumber = 0;
    while (number) {
      let digit = number % 10;
      newNumber += digit * digit;
      number = Math.floor(number / 10);
    }
    number = newNumber;
  }
  return true;
};

const solution = (n) => {
  return isHappy(n) ? `${n} is a Happy Number.` : `${n} is an Unhappy Number.`;
};
console.log(solution(7));
